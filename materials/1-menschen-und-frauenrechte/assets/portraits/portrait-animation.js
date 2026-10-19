/* Course-local facial animation and discrete poses via LiaPixi.defineActor.
 * Registered head/face overlays stay fixed while body poses change by scene.
 * Text-informed articulation is an approximation, not audio phoneme alignment.
 */
(function (global) {
  'use strict';
  // LiaScript can execute a header script through a data: URL. Such a URL
  // cannot serve as a base for asset paths; resolve against the course URL.
  const current = document.currentScript?.src || '';
  let courseURL = '';
  try { courseURL = decodeURIComponent(location.search.slice(1)).split('#')[0]; } catch {}
  const root = /^https?:/i.test(current)
    ? new URL('.', current)
    : new URL('./assets/portraits/', /^https?:/i.test(courseURL) ? courseURL : document.baseURI);
  const manifestPromise = fetch(new URL('manifest.json', root)).then(r => {
    if (!r.ok) throw new Error('Portrait manifest: ' + r.status);
    return r.json();
  });
  const settings = {
    khadija: { pace: 1.04, blinkMin: 3100, blinkSpan: 2900, seed: 7141 },
    samira: { pace: .94, blinkMin: 3700, blinkSpan: 2700, seed: 5252 },
    driss: { pace: 1.10, blinkMin: 3400, blinkSpan: 3300, seed: 5555 }
  };
  function articulation(text, pace) {
    const units = [];
    for (const word of String(text).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().match(/[a-zäöüß]+|[.,;:!?…]/g) || []) {
      if (/^[.,;:!?…]$/.test(word)) { units.push({ frame: 0, ms: /[.!?…]/.test(word) ? 245 : 150 }); continue; }
      let hadVowel = false;
      for (const syllable of word.match(/[aeiouäöüy]+|[bmpfv]+/g) || []) {
        let frame = /[ouöü]/.test(syllable) ? 4 : /[aä]/.test(syllable) ? 3 : /[eiüy]/.test(syllable) ? 2 : /[bmp]/.test(syllable) ? 0 : 1;
        const ms = frame === 0 ? 64 : 105 + Math.min(2, syllable.length - 1) * 26;
        if (frame > 1) { units.push({ frame: 1, ms: 40 }); hadVowel = true; }
        units.push({ frame, ms: ms * pace });
      }
      if (!hadVowel) units.push({ frame: 1, ms: 90 * pace });
      units.push({ frame: 1, ms: 45 * pace });
    }
    return units.length ? units : [{ frame: 1, ms: 120 }, { frame: 2, ms: 130 }, { frame: 0, ms: 70 }];
  }
  class Motion {
    constructor(profile, options = {}) {
      this.profile = profile; this.config = settings[profile] || settings.khadija;
      this.seed = options.seed ?? this.config.seed; this.time = 0; this.hold = 0;
      this.reduced = options.reduced ?? global.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
      this.mouth = [1, 0, 0, 0, 0]; this.eye = [1, 0, 0]; this.target = 0;
      this.units = articulation('', this.config.pace); this.index = 0; this.remaining = 0;
      this.blinkAt = 2200 + this.random() * 1500; this.blinkStarted = -Infinity;
      this.speaking = false; this.settled = false;
    }
    random() { this.seed = (1664525 * this.seed + 1013904223) >>> 0; return this.seed / 4294967296; }
    line(text) {
      this.units = articulation(text, this.config.pace); this.index = 0;
      this.remaining = 0; this.hold = 0; this.speaking = false; this.settled = false;
    }
    talk(open) { if (open) this.hold = this.time + 245; }
    stop() { this.hold = 0; this.speaking = false; this.target = 0; }
    blink() { if (!this.reduced) this.blinkStarted = this.time; }
    update(ms) {
      ms = Math.max(0, Math.min(100, ms)); this.time += ms;
      const speaking = this.time < this.hold;
      if (speaking) {
        this.remaining -= ms;
        if (this.remaining <= 0) {
          const unit = this.units[this.index++];
          if (unit) { this.target = unit.frame; this.remaining = unit.ms; }
          else { // a long TTS utterance may outlast the text estimate: quiet continuation
            this.target = this.random() < .24 ? 0 : this.random() < .62 ? 1 : 2;
            this.remaining = 90 + this.random() * 95;
          }
        }
      } else this.target = 0;
      this.speaking = speaking;
      const speed = this.reduced ? 1 : Math.min(1, ms / 42);
      for (let i = 0; i < this.mouth.length; i++) {
        this.mouth[i] += ((i === this.target ? 1 : 0) - this.mouth[i]) * speed;
        if (this.mouth[i] < .001) this.mouth[i] = 0;
      }
      if (!this.reduced && this.time >= this.blinkAt) {
        this.blinkStarted = this.time;
        this.blinkAt = this.time + this.config.blinkMin + this.random() * this.config.blinkSpan;
      }
      const t = this.time - this.blinkStarted;
      // Fast closure, brief closed lid, slower reopening. No change to gaze,
      // brows, glasses or expression, and blinking is independent of speech.
      let closed = 0, half = 0;
      if (t >= 0 && t < 28) half = t / 28;
      else if (t < 52) { closed = (t - 28) / 24; half = 1 - closed; }
      else if (t < 103) closed = 1;
      else if (t < 140) { half = (t - 103) / 37; closed = 1 - half; }
      else if (t < 190) half = 1 - (t - 140) / 50;
      this.eye = [Math.max(0, 1 - half - closed), half, closed];
      return this.snapshot();
    }
    snapshot() { return { mouth: [...this.mouth], eye: [...this.eye], speaking: this.speaking, target: this.target, time: this.time }; }
  }
  const live = new Set();
  const focusStages = new WeakMap();
  function focusStage(ctx) {
    if (focusStages.has(ctx.app)) return focusStages.get(ctx.app);
    const shade = new ctx.PIXI.Graphics().rect(0, 0, ctx.W, ctx.H).fill('#000');
    shade.alpha = 0; shade.zIndex = 10;
    const layer = ctx.layers.actors;
    layer.sortableChildren = true; layer.addChild(shade);
    const state = { actor: null, shade, active: false };
    focusStages.set(ctx.app, state);
    const tick = ticker => {
      if (shade.destroyed) { ctx.app.ticker.remove(tick); return; }
      const a = state.actor;
      const target = !!(a && !a.view.destroyed && a.view.visible && a.view.alpha > 0 && a.focus);
      state.active = target;
      const amount = target ? .50 : 0;
      const reduced = a?.motion.reduced;
      const step = Math.min(1, ticker.deltaMS / 450) * .50;
      shade.alpha = reduced ? amount : shade.alpha + Math.sign(amount - shade.alpha) * Math.min(step, Math.abs(amount - shade.alpha));
      shade.visible = shade.alpha > .001;
      if (a && !a.view.destroyed) a.view.zIndex = shade.visible ? 20 : 0;
      for (const id of ['achten_symbol', 'schuetzen_symbol', 'gewaehrleisten_symbol']) {
        const icon = ctx.actor(id);
        if (icon) {
          icon.view.zIndex = shade.visible ? 20 : 0;
          if (shade.visible) icon.view.tint = 0xffffff;
        }
      }
    };
    ctx.app.ticker.add(tick);
    return state;
  }
  function install(LiaPixi) {
    if (install.done) return; install.done = true;
    // 0.5.0 interprets an image's alt= as an expression image. A static
    // actor keeps the description available without requesting it as a URL.
    LiaPixi.defineActor('courseimage', async (ctx, def) => {
      const texture = await ctx.PIXI.Assets.load(new URL(def.src, new URL('../../', root)).href);
      const view = new ctx.PIXI.Sprite(texture); view.anchor.set(.5, 1);
      return { view, height: texture.height, setExpression() {}, talk() {}, setIdle() {}, destroy() { view.destroy(); } };
    });
    LiaPixi.on('say', (story, event) => {
      for (const actor of live) {
        if (actor.id === event.speaker) actor.motion.line(event.text);
        else actor.motion.stop();
      }
    });
    for (const event of ['choice', 'end', 'resume']) LiaPixi.on(event, () => { for (const actor of live) actor.motion.stop(); });
    LiaPixi.defineActor('courseportrait', async (ctx, def) => {
      const manifest = await manifestPromise, profile = manifest.profiles[def.kv.portrait];
      if (!profile) throw new Error('Unknown portrait: ' + def.kv.portrait);
      const { Container, Sprite, Assets, Texture, Rectangle } = ctx.PIXI;
      const atlas = await Assets.load(new URL(profile.atlas, root).href);
      const bodies = Object.fromEntries(await Promise.all(Object.entries(profile.bodies).map(async ([key, url]) => [key, await Assets.load(new URL(url, root).href)])));
      const faces = profile.expressions.map((_, row) => Array.from({ length: 6 }, (_, col) => new Texture({ source: atlas.source, frame: new Rectangle(col * 160, row * 160, 160, 160) })));
      const poses = Object.fromEntries(await Promise.all(Object.entries(profile.poses || {}).map(async ([key, pose]) => [key, {
        ...pose, texture: await Assets.load(new URL(pose.file, root).href),
        headTexture: pose.head ? await Assets.load(new URL(pose.head, root).href) : null
      }])));
      const view = new Container(), body = new Sprite(bodies.neutral);
      body.anchor.set(.5, 1); view.addChild(body);
      // Keep the original head and its facial animation registered while the
      // generated sprite supplies the gesture. Masks are render-time layers;
      // original source images are never overwritten.
      const head = new Sprite(bodies.neutral);
      head.anchor.set(.5, 1); head.visible = false; view.addChild(head);
      const headMaskCanvas = document.createElement('canvas');
      headMaskCanvas.width = 448; headMaskCanvas.height = 512;
      const hm = headMaskCanvas.getContext('2d');
      const headEnd = profile.headEnd || 205;
      const grad = hm.createLinearGradient(0, headEnd - 22, 0, headEnd);
      grad.addColorStop(0, '#fff'); grad.addColorStop(1, 'rgba(255,255,255,0)');
      hm.fillStyle = grad; hm.fillRect(0, 0, 448, headEnd);
      const headMask = new Sprite(Texture.from(headMaskCanvas));
      headMask.anchor.set(.5, 1); view.addChild(headMask); head.mask = headMask;
      const bodyMask = new ctx.PIXI.Graphics();
      bodyMask.rect(-448, -512 + headEnd - 22, 896, 512 - headEnd + 22).fill('#fff');
      bodyMask.rect(-448, -512, 369, headEnd).fill('#fff');
      bodyMask.rect(86, -512, 362, headEnd).fill('#fff');
      bodyMask.visible = false;
      view.addChild(bodyMask);
      const overlays = Array.from({ length: 6 }, (_, i) => {
        const sprite = new Sprite(faces[0][i]); sprite.position.set(-80, -482); sprite.alpha = 0;
        view.addChild(sprite); return sprite;
      });
      const actor = {
        id: def.id, view, height: 512, expression: 'neutral', focus: false, motion: new Motion(def.kv.portrait),
        setExpression(expr) {
          const pose = poses[expr];
          const face = pose?.face || (profile.expressions.includes(expr) ? expr : 'neutral');
          this.expression = pose ? expr : face;
          this.focus = !!pose?.focus;
          body.texture = pose?.texture || bodies[face];
          body.position.set(pose?.offsetX || 0, pose?.offsetY || 0);
          const left = (pose?.headLeft || 145) - 224;
          const right = (pose?.headRight || 310) - 224;
          bodyMask.clear();
          bodyMask.rect(-448, -512 + headEnd - 22, 896, 512 - headEnd + 22).fill('#fff');
          bodyMask.rect(-448, -512, left + 448, headEnd).fill('#fff');
          bodyMask.rect(right, -512, 448 - right, headEnd).fill('#fff');
          body.mask = pose && !pose.fullSprite ? bodyMask : null;
          bodyMask.visible = !!pose && !pose.fullSprite;
          head.texture = pose?.headTexture || bodies[face]; head.visible = !!pose && !pose.fullSprite;
          const row = profile.expressions.indexOf(face);
          for (let i = 0; i < 6; i++) overlays[i].texture = faces[row][i];
        },
        setIdle() { /* whole-body motion intentionally disabled for these portraits */ },
        talk(open) { this.motion.talk(open); },
        update(ms) {
          const state = this.motion.update(ms);
          for (let i = 0; i < 4; i++) overlays[i].alpha = state.mouth[i + 1];
          overlays[4].alpha = state.eye[1]; overlays[5].alpha = state.eye[2];
        },
        destroy() { live.delete(this); headMask.texture.destroy(true); view.destroy({ children: true }); }
      };
      if (def.kv.portrait === 'samira') focusStage(ctx).actor = actor;
      live.add(actor); return actor;
    });
  }
  global.CoursePortraits = {
    Motion, articulation, manifest: manifestPromise, root, install,
    inspect: () => [...live].map(a => ({ id: a.id, expression: a.expression, ...a.motion.snapshot(), scale: [a.view.scale.x,a.view.scale.y], rotation: a.view.rotation }))
  };
  if (global.LiaPixi) install(global.LiaPixi);
  else (global.LiaPixiPlugins ||= []).push(install);
})(window);
