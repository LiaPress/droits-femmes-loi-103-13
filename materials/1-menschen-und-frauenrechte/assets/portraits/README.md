# Gesichtsanimation für Modul 1

Khadija, Samira und Driss besitzen für alle 15 Gesichtsausdrücke fünf Mundzustände (Ruhe, leicht geöffnet, mittel geöffnet, offen, gerundet) sowie offene, halb geschlossene und geschlossene Lider. Die ursprünglichen Körperbilder bleiben als Ruheposen erhalten; zusätzliche Körperstellungen sind im Manifest als `poses` eingetragen. Blinzeln und Sprechen können gleichzeitig stattfinden. Es gibt keine kontinuierliche Arm-, Kopf- oder Körperbewegung.

Die [interaktive Vorschau](review.html) bietet alle Ausdrücke sowie Steuerelemente für Sprechen, Blinzeln und Pause. Sie wird über denselben HTTP-Server wie der Kurs geöffnet; direktes Öffnen über `file:` unterstützt das Nachladen der Manifestdatei nicht. Die [GIF-Vorschau](sprechvorschau-v2.gif) ist ohne Server abspielbar.

## Einbindung

Der Kurs lädt PixiJS 0.5.0 sowie `./assets/portraits/portrait-animation.js` im Kopf. Die Erweiterung verwendet ausschließlich die öffentliche Schnittstelle `LiaPixi.defineActor`; ein neuer Versionsstand der externen Vorlage oder ein Push ist dafür nicht notwendig.

```text
char khadija "Khadija" type=courseportrait portrait=khadija height=0.85 idle=none
```

Für Samira gilt `portrait=samira`, für Driss `portrait=driss`. Die vorhandenen Ausdrucksnamen bleiben erhalten, etwa `khadija besorgt:`. Die ursprünglichen `talk=`-/`blink=`-Dateien dienen als ältere Arbeitsstände und werden für diese Figuren nicht mehr geladen. Die alten Körper-PNGs werden als unveränderte Basis verwendet.

## Bewegung

1. Mund: kurze, weich übergehende Stellungen; Satzzeichen führen zu kurzen Schließphasen. Vokalgruppen des Texts beeinflussen die Auswahl. Die Mundstellung fällt nach Ende des Sprechsignals in die Ruhe zurück.
2. Lider: kurze Schließbewegung, kurze geschlossene Phase, etwas langsamere Öffnung; insgesamt etwa 190 ms. Die Abstände betragen je Figur ungefähr 3–7 Sekunden und sind gegeneinander versetzt.
3. Kopf und Körper: keine Skalierung, Rotation oder Ruhebewegung. Diskrete Posen wechseln an inhaltlichen Wendepunkten. Die Bühne darf die gesamte Figur beim Ein-/Ausblenden und bei Ortswechseln weiterhin bewegen.
4. „Bewegung reduzieren“: kein automatisches Blinzeln und keine Überblendung der Mundstellungen. Das Sprechsignal bleibt erkennbar.

Die Zuordnung zu Vokalgruppen ist eine stilisierte Annäherung für die aktuelle deutsche Fassung, keine Analyse des Audios und keine phonetisch genaue Lippensynchronisation. Für spätere französische/arabische Fassungen ist die Textheuristik erneut zu prüfen.

## Bildregie vom 18.10.2026

1. Samira: Begrüßung einmal mit `begruessung`; danach Ruhepose. Bei den drei Pflichten `notiz-verweisen`, `notiz-verweisen-ernst` bzw. `rueckblick-verweisen` mit einer erhobenen offenen Hand. `rueckblick`, `rueckblick-ernst` und `rueckblick-freundlich` verwenden die ursprünglichen Ruhebilder mit gesenkten Händen und erhalten die dunkle Erklärungsebene. Die früheren Varianten `erklaeren`, `erklaeren-ernst`, `verweisen`, `notiz-erklaeren` und `notiz-ernst` bleiben im Manifest verfügbar, werden im aktuellen Kurs aber nicht verwendet.
2. Khadija: `schulmappe`, `schulmappe-traurig`, `ellenbogen`, `ellenbogen-traurig`, `ellenbogen-traenen`, `zugehoert`, `zugehoert-gefasst`, `aufbruch`, `beraterin`.
3. Driss: `telefon`.

Verwendung wie bisher als Ausdruck: `show khadija ellenbogen at center` oder `khadija ellenbogen-traenen: Ich habe ihm nicht gesagt, dass ich hier bin.` Die Pose verweist auf ein Körperbild und auf den vorhandenen Gesichtsausdruck (`face`). Die Originalbilder werden nicht überschrieben. Ein maskierter Originalkopf hält Gesicht und Animation an ihrem festen Platz; `offsetX` korrigiert gegebenenfalls die Ausrichtung des neuen Körpers. Die Telefonpose rendert das vollständige neue Bild (`fullSprite`), damit die Hand vor dem Ohr sichtbar bleibt. Die Tränenpose verwendet einen eigenen Kopf (`head`), dessen Träne unterhalb der Lidmasken liegt.

Posen mit `focus: true` blenden innerhalb von etwa 450 ms eine schwarze Ebene mit 50 % Deckkraft über Raum und Szenenfiguren ein. Samira und die drei Pflichtsymbole liegen darüber. Der Effekt wird aus der tatsächlich sichtbaren Pose abgeleitet, auch nach Wiederherstellen eines Spielstands oder Zurückgehen. Unsichtbare oder normale Samira schaltet ihn wieder aus. Bei reduzierter Bewegung erfolgt der Wechsel direkt. `dim=on` bleibt die zusätzliche Sprecherhervorhebung der Vorlage.

Die drei Symbole verwenden `type=courseimage`: eine statische Darstellung, die `alt=` nicht als zusätzlichen Bildpfad missversteht. `height=0.24 y=0.39` hält sie im oberen linken Bildbereich sichtbar.

Korrektur nach markierter Bildschirmaufnahme: Samira steht bei Notizkarten und Rückblick rechts; das jeweils aktive Pflichtsymbol erscheint bei `28%`, höher im linken Bildbereich (`y=0.39`). Im Rückblick werden die drei Pflichten nacheinander mit dem zugehörigen Symbol gezeigt. Anschließend verschwinden die Symbole und Samira senkt die Hände. Khadijas Aufbruchspose wird gespiegelt (`flip`) und zur linken Tür bewegt; Gesichtsebenen und Körper werden gemeinsam gespiegelt.

Szenenplan und Prüfprotokoll: [Bildregie](../../bildregie-review.md). Bühnenaufnahmen und Messungen stehen in `regie-*.png` und `regie-*-verification.json`. Die ältere `review.html` zeigt weiterhin die 15 ursprünglichen Gesichtsausdrücke; die neuen Posen werden im Kurs selbst und in den Bühnenaufnahmen geprüft.

## Dateien und Prüfung

- `manifest.json`: Ausdruckszuordnung und unveränderte Körperbilder.
- `<person>/faces.png`: sechs lokale Masken je Ausdruck; vier Mund- und zwei Liderebenen. Das Ruhebild selbst liefert Mund und offene Augen.
- `generation-prompts.json`: tatsächlich verwendete Bildgenerator-Prompts.
- `asset-verification.json`: Masken, Registrierung und Anzahl der Overlay-Pixel.
- `quality-review.md`: Sichtprüfung und Grenzen.
- `browser-verification.json`: Browservergleich aller 90 Varianten und Zeitverläufe.

Die Sichtprüfung umfasst alle Ausdrücke als Einzelbilder und zeitlich aufgenommene Browsersequenzen. Ein Pixelvergleich prüft, dass sich außerhalb der festgelegten Mund-/Augenregionen nichts verändert. Zusätzlich wurden die öffentliche PixiJS-Erweiterung und das vollständige Kurs-Skript auf der echten Bühne geprüft.
