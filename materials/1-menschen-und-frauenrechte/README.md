<!--
author:   André Dietrich
email:    LiaScript@web.de
version:  0.1.0
language: de
narrator: Deutsch Female
comment:  Modul 1 des Kurses „Droits humains, droits des femmes et Loi 103-13“ – Menschen- und Frauenrechte als Verpflichtung, die Marokko selbst eingegangen ist. Teaser-Fassung, zunächst auf Deutsch.
import:   https://raw.githubusercontent.com/LiaTemplates/pixijs/0.5.0/README.md
script:   ./assets/portraits/portrait-animation.js

translation: Arabisch    ./README.ar.md
translation: Englisch    ./README.en.md
translation: Französisch ./README.fr.md
              
-->

# Menschen- und Frauenrechte

![Ein Schreibtisch in einer Dienststelle, auf der anderen Seite ein leerer Stuhl im warmen Morgenlicht, durch das Fenster ein Olivenhain.](assets/images/titelbild.png)

                                 --{{0}}--
Willkommen zu Modul 1. Sie begleiten Khadija, eine Frau, die vor einigen Jahren auf eine Wache kam. Sie selbst tun Dienst, als Rachid oder als Nadia, und treffen drei Entscheidungen. Ein Durchlauf dauert etwa acht Minuten, danach folgt ein Quiz mit sechs Fragen. Es geht um Gewalt in der Familie, gezeigt wird aber keine Gewalt. Sie können jederzeit anhalten. Und wenn Sie selbst betroffen sind: Sie sind nicht allein. Vertrauliche Hilfe bietet der psychologische Dienst Ihrer Institution, außerdem helfen Beratungsstellen für Frauen.

In diesem Modul begleiten Sie Khadija, eine Frau, die vor einigen Jahren auf eine Wache kam. Sie selbst tun Dienst – als Rachid oder als Nadia – und treffen drei Entscheidungen. Jede hat Folgen für Khadija.

* __Dauer:__ etwa 8 Minuten für einen Durchlauf, danach ein Abschlussquiz mit 6 Fragen (bestanden ab 80 %, also 5 richtigen Antworten; beliebig oft wiederholbar).
* __Inhalt:__ Es geht um Gewalt in der Familie. Gezeigt wird keine Gewalt. Sie können jederzeit anhalten – die Geschichte wartet auf Sie.
* __Figuren:__ Khadija, Samira Bennani und alle anderen Figuren sind erfunden, zusammengesetzt aus vielen echten Erfahrungen.
* __Wenn Sie selbst betroffen sind:__ Sie sind nicht allein. Vertrauliche Unterstützung bietet der psychologische Dienst Ihrer Institution; außerdem helfen Beratungsstellen für Frauen.

__Bedienung der Geschichte:__

* Weiter: Klick, Leertaste oder Eingabetaste
* Entscheidungen: anklicken, mit der Tab-Taste erreichen oder die Tasten 1 und 2 drücken
* 🗣 schaltet das Vorlesen ein und aus, ↶ geht einen Schritt zurück, ↺ beginnt neu
* Esc verlässt die Bühne

Die Geschichte beginnt auf der Seite „Khadijas Geschichte“.

## Khadijas Geschichte

```text @Pixi.story
story modul1 "Khadija – Modul 1"
lang de-DE
option tts=on dim=on hint=on
bg   empfang     assets/images/hintergrund-empfang.png        alt="Blick über Ihren Schreibtisch in den Empfangsbereich einer Dienststelle: ein leerer Stuhl, ein Glas Tee, ein Fenster mit Tageslicht"
bg   gespraech   assets/images/hintergrund-gespraechsraum.png alt="Ein ruhiger Gesprächsraum mit kleinem Tisch, zwei Stühlen, einer Pflanze und einem Fenster mit warmem Licht"
bg   dorf        assets/images/hintergrund-olivenhain.png     alt="Ein Olivenhain in den Hügeln bei Sefrou, im Hintergrund ein kleines Dorf im Morgenlicht"
bg   kooperative assets/images/hintergrund-kooperative.png    alt="Der helle Raum einer Frauenkooperative mit Olivenöl, Regalen und einem großen Tisch"
bg   stadt       assets/images/hintergrund-stadt-schule.png   alt="Eine ruhige Straße in einer Stadt mit dem Eingang einer Schule am Morgen"
image achten_symbol        assets/images/symbol-achten.png        type=courseimage height=0.24 y=0.39 alt="Symbol für achten: eine offene Hand"
image schuetzen_symbol     assets/images/symbol-schuetzen.png     type=courseimage height=0.24 y=0.39 alt="Symbol für schützen: ein Schutzschild"
image gewaehrleisten_symbol assets/images/symbol-gewaehrleisten.png type=courseimage height=0.24 y=0.39 alt="Symbol für gewährleisten: eine offene Tür mit Licht"
char samira  "Samira Bennani" type=courseportrait portrait=samira height=0.85 idle=none color=#2f6f8f voice="de-DE"
char khadija "Khadija" type=courseportrait portrait=khadija height=0.85 idle=none color=#7a8b3a voice="de-DE" pitch=1.1
char kollege "Kollege Driss" type=courseportrait portrait=driss height=0.7 idle=none color=#8a7a5a voice="de-DE" pitch=0.85
char ich     "Sie"                 base:man color=#555555 voice="de-DE" pitch=0.95
char gedanke "Ihr Gedanke"         base:man color=#999999 voice="de-DE" rate=0.9
var rolle = ""
var achten = 0
var schuetzen = 0
var gewaehrleisten = 0
// Vertiefungen (wandernde Unterschrift, skeptischer Kollege): 1 = Teaser, 0 = Endfassung
var vertiefung = 1

# start
show samira begruessung at center fade 0.6
samira: Willkommen. Ich bin Samira Bennani. Angefangen habe ich im Streifendienst, heute bilde ich Kolleginnen und Kollegen aus.
show samira neutral at center
samira: In diesem Modul begleiten Sie eine Frau, die vor einigen Jahren zu uns auf die Wache kam. Sie heißt Khadija. Ihre Geschichte ist erfunden – zusammengesetzt aus vielen echten Erfahrungen.
samira ernst: Es geht um Gewalt in der Familie. Gezeigt wird keine Gewalt. Wenn Ihnen etwas zu nahe geht, halten Sie einfach an – die Geschichte wartet auf Sie.
samira: Sie treffen drei Entscheidungen. Jede hat Folgen für Khadija. In welcher Rolle tun Sie heute Dienst?
? Als Rachid – Gendarm, 49 Jahre, 23 Dienstjahre -> s1b [rolle = "Rachid"]
? Als Nadia – Inspektorin, 34 Jahre               -> s1b [rolle = "Nadia"]

# s1b
-> s2

# x1
if vertiefung == 0 -> x1_ende
title "1993" "Marokko tritt der Frauenrechtskonvention der Vereinten Nationen bei"
title "2011" "Neue Verfassung, Artikel 19: gleiche Rechte und Freiheiten für Frauen und Männer"
title "Heute" "Ihr Schreibtisch"
samira: Marokko hat sich selbst verpflichtet. Eingelöst wird diese Verpflichtung an einem Schreibtisch – an Ihrem.
-> x1_ende

# x1_ende
return

# s2
hide samira fade 0.4
bg empfang fade 1
title "Ein Dienstag im Herbst" "vor einigen Jahren"
: Sie sind {rolle} und sitzen am Empfang. Hinter Ihnen sortiert Ihr Kollege Driss Akten.
show kollege at far-left fade 0.5
show khadija schulmappe at center from offright 1s idle=none
khadija: Es war ein Dienstag im Herbst. Ich hatte die Schulpapiere meiner Tochter dabei. Sie sollte in die Stadt zur Schule – und er war dagegen.
khadija: Ich war noch nie auf einer Wache. Wer dort gesehen wird, über den reden sie im Dorf. Ich sprach Tamazight, nur wenig Darija.
if rolle == "Rachid": khadija schulmappe: Gibt es hier eine Frau, mit der ich sprechen kann?
if rolle == "Nadia": khadija schulmappe: Sie erzählen das doch nicht im Dorf?
kollege skeptisch: Familiensache. Das regeln die bei sich zu Hause.
if rolle == "Rachid": kollege: Wir zwei wissen doch, wie das in den Dörfern läuft.
if rolle == "Nadia": kollege: Dein Frauenthema, Nadia?
if vertiefung == 1 -> x2
-> d1

# x2
kollege: Mal ehrlich – wir sind keine Sozialarbeiter. Was in einer Familie passiert, geht uns nichts an.
: Was antworten Sie Driss?
? „Bedrohung ist keine Privatsache. Der Staat muss sie schützen.“ -> x2_gut
? „Du hast ja recht – aber die Vorschrift ist eben so.“            -> x2_halb

# x2_gut
kollege nachdenklich: Hm. So habe ich das noch nicht gesehen.
-> d1

# x2_halb
kollege: Vorschrift ist Vorschrift. Dann eben.
: Driss zuckt mit den Schultern. Eine Vorschrift überzeugt ihn nicht – ein Grund vielleicht schon.
-> d1

# d1
if rolle == "Rachid": gedanke: Vor Jahren stand schon einmal eine Frau hier. Du hast sie nach Hause geschickt.
if rolle == "Nadia": gedanke: Vierzehn offene Akten. In einer Stunde ist Schichtwechsel.
: Khadija steht vor Ihrem Schreibtisch. Was tun Sie?
? Ich biete ihr einen ruhigen Platz und ein Gespräch in Tamazight an. -> s3a [achten += 1]
? Ich nehme ihre Angaben kurz am Schalter auf – die Schlange ist lang. -> s3b
hotspot 0.72,0.08,0.22,0.30 -> pause1 "Fenster – kurz durchatmen"

# pause1
: Sie können jederzeit unterbrechen. Die Geschichte wartet hier auf Sie.
-> d1

# notiz1
title "Notizkarte – achten"
show achten_symbol at 28% fade 0.4
show samira notiz-verweisen at right fade 0.4
samira: Marokko hat es sich selbst versprochen: In der Verfassung von 2011, Artikel 19, haben Frauen und Männer die gleichen Rechte und Freiheiten.
samira: Schon 1979 hat Marokko die beiden UN-Pakte über die Menschenrechte ratifiziert.
samira: Und international: Nach Artikel 2 der Allgemeinen Erklärung der Menschenrechte gelten diese Rechte ohne Unterschied – auch nicht nach Geschlecht oder Sprache.
samira notiz-verweisen: Achten heißt: Wir selbst benachteiligen niemanden. Auch nicht, weil jemand unsere Sprache nicht spricht.
hide samira fade 0.4
hide achten_symbol fade 0.4
return

# s3a
call notiz1
hide kollege fade 0.4
bg gespraech fade 1
show khadija at center fade 0.5 idle=none
if rolle == "Rachid": ich: Setzen Sie sich. Wir können Tamazight sprechen. Und wenn Sie lieber mit einer Frau sprechen, rufe ich eine Kollegin aus der Anlaufstelle für Frauen dazu.
if rolle == "Nadia": ich: Setzen Sie sich. Was Sie hier sagen, bleibt hier. Meine Kollegin Amina spricht Tamazight, sie hilft uns.
show khadija zugehoert at center
: Khadija legt die Schulmappe vor sich auf den Tisch. Ihre Hände lösen sich voneinander.
hide khadija fade 0.5
bg kooperative fade 1.5
khadija: Das Geld aus der Kooperative – mein Anteil an der Olivenernte – nimmt er mir ab. Jeden Monat.
bg dorf fade 1.5
khadija: Und er hat gesagt: Wenn ich mit der Kleinen in die Stadt gehe, sehe ich sie nie wieder.
bg gespraech fade 1.5
show khadija traurig at center fade 0.5
khadija: Ich will nur, dass sie zur Schule geht.
-> d2a

# d2a
if rolle == "Rachid": gedanke: Versöhnung – das hast du immer für den klügsten Weg gehalten.
if rolle == "Nadia": gedanke: Wenn du das aufnimmst, wird es eine lange Akte.
: Khadija hat Ihnen von Drohungen und von einbehaltenem Geld erzählt. Was tun Sie?
? Ich nehme Drohungen und Geldentzug als Gefährdung auf – auch beim Ehemann. -> s4a [schuetzen += 1]
? Ich schlage ein Gespräch mit beiden vor – das klärt sich in der Familie.   -> s4b
hotspot 0.72,0.08,0.22,0.30 -> pause2a "Fenster – kurz durchatmen"

# pause2a
: Sie können jederzeit unterbrechen. Die Geschichte wartet hier auf Sie.
-> d2a

# s3b
call notiz1
hide kollege fade 0.4
hide khadija fade 0.8
: Der Stuhl vor Ihrem Schreibtisch ist leer. Daneben steht ein halb volles Glas Tee.
khadija: Ich bin gegangen. Am Schalter, vor all den Leuten, konnte ich nicht sagen, was los war.
khadija: Drei Wochen später kam ich wieder. Diesmal früh am Morgen, als niemand da war.
show khadija schulmappe-traurig at center from offright 1s
khadija: Er nimmt mir das Geld aus der Kooperative ab. Und er sagt, ich sehe meine Tochter nie wieder, wenn ich gehe.
-> d2b

# d2b
if rolle == "Rachid": gedanke: Versöhnung – das hast du immer für den klügsten Weg gehalten.
if rolle == "Nadia": gedanke: Wenn du das aufnimmst, wird es eine lange Akte.
: Khadija ist zurückgekommen. Was tun Sie?
? Ich führe sie in den Gesprächsraum und nehme die Gefährdung auf.      -> s4c [schuetzen += 1]
? Ich notiere den Besuch und rate ihr, erst mit der Familie zu sprechen. -> s4d
hotspot 0.72,0.08,0.22,0.30 -> pause2b "Fenster – kurz durchatmen"

# pause2b
: Sie können jederzeit unterbrechen. Die Geschichte wartet hier auf Sie.
-> d2b

# notiz2
title "Notizkarte – schützen"
show schuetzen_symbol at 28% fade 0.4
show samira notiz-verweisen at right fade 0.4
samira: 1993 ist Marokko der Frauenrechtskonvention der Vereinten Nationen beigetreten. Artikel 2 verpflichtet den Staat, Diskriminierung von Frauen auch durch Privatpersonen zu beseitigen. Wie Marokko diesen Artikel versteht, hat es in einer eigenen Erklärung festgehalten – mehr dazu in der Vertiefung.
samira: 2011 hat Marokko eine frühere Einschränkung zu Artikel 16 aufgehoben – dem Artikel über Ehe und Familie. Fachleute nennen so eine Einschränkung „Vorbehalt“. Die Familie ist kein rechtsfreier Raum.
samira notiz-verweisen-ernst: Schützen heißt: Wir handeln, auch wenn die Gefahr aus der eigenen Familie kommt.
hide samira fade 0.4
hide schuetzen_symbol fade 0.4
return

# notiz3
title "Notizkarte – gewährleisten"
show gewaehrleisten_symbol at 28% fade 0.4
show samira notiz-verweisen at right fade 0.4
samira: Gewährleisten heißt: Die Rechte müssen bei der Frau auch ankommen. Sie verlässt uns mit Information in ihrer Sprache und mit einem nächsten Schritt.
samira: Bei Polizei, Gendarmerie, Gericht und Krankenhaus gibt es eigene Anlaufstellen für Frauen, die Gewalt erlebt haben. Wie Sie Frauen dorthin begleiten, lernen Sie in den nächsten Modulen.
hide samira fade 0.4
hide gewaehrleisten_symbol fade 0.4
return

# s4a
call notiz2
show khadija at center fade 0.5 idle=none
: Die Gefährdung ist aufgenommen. Khadija steht auf, ihre Tasche in der Hand.
khadija besorgt: Und jetzt? Ich muss zurück, bevor es dunkel wird.
-> d3a

# d3a
if rolle == "Rachid": gedanke: Was hätte die Frau von damals gebraucht?
if rolle == "Nadia": gedanke: Draußen ist sie allein – in einer Sprache, die unsere Formulare nicht sprechen.
: Bevor Khadija geht – was tun Sie?
? Ich erkläre ihr in Tamazight, was jetzt geschieht und wo sie Hilfe findet. -> s4a_ok [gewaehrleisten += 1]
? Ich sage ihr, dass wir uns melden, sobald sich etwas tut.                  -> ende
hotspot 0.72,0.08,0.22,0.30 -> pause3a "Fenster – kurz durchatmen"

# pause3a
: Sie können jederzeit unterbrechen. Die Geschichte wartet hier auf Sie.
-> d3a

# s4a_ok
call notiz3
-> ende

# s4b
call notiz2
bg empfang fade 1
show kollege at far-left fade 0.5
show khadija besorgt at center fade 0.5 idle=none
: Auf Ihren Vorschlag hin ruft Driss ihren Mann an.
show kollege telefon at far-left
kollege: Er ist in einer halben Stunde da.
show khadija ellenbogen at center
: Khadija zieht die Arme an den Körper. Eine Hand umfasst ihren eigenen Ellenbogen.
khadija ellenbogen-traenen: Ich habe ihm nicht gesagt, dass ich hier bin.
show kollege neutral at far-left
: Eine Träne läuft über Khadijas Wange. Eine halbe Stunde später steht ihr Mann am Empfang. Khadija sagt kein Wort mehr.
show khadija ellenbogen-traurig at center
-> d3b

# d3b
if rolle == "Rachid": gedanke: So hat es damals auch ausgesehen. Ganz ruhig.
if rolle == "Nadia": gedanke: Sie hat dich gefragt, ob es im Dorf bleibt. Jetzt steht er hier.
: Was tun Sie, bevor die beiden gehen?
? Ich spreche noch einmal allein mit ihr und sage ihr, wo sie Hilfe findet. -> s4b_ok [gewaehrleisten += 1]
? Ich lasse die beiden gehen – sie haben ja miteinander gesprochen.         -> ende
hotspot 0.72,0.08,0.22,0.30 -> pause3b "Fenster – kurz durchatmen"

# pause3b
: Sie können jederzeit unterbrechen. Die Geschichte wartet hier auf Sie.
-> d3b

# s4b_ok
call notiz3
-> ende

# s4c
call notiz2
hide kollege fade 0.4
bg gespraech fade 1
show khadija at center fade 0.5 idle=none
: Im Gesprächsraum nehmen Sie die Gefährdung auf, auf Tamazight. Khadija spricht leise, aber vollständig.
khadija zugehoert-gefasst: Diesmal hat mir jemand zugehört.
-> d3c

# d3c
if rolle == "Rachid": gedanke: Was hätte die Frau von damals gebraucht?
if rolle == "Nadia": gedanke: Draußen ist sie allein – in einer Sprache, die unsere Formulare nicht sprechen.
: Bevor Khadija geht – was tun Sie?
? Ich erkläre ihr in Tamazight, was jetzt geschieht und wo sie Hilfe findet. -> s4c_ok [gewaehrleisten += 1]
? Ich sage ihr, dass wir uns melden, sobald sich etwas tut.                  -> ende
hotspot 0.72,0.08,0.22,0.30 -> pause3c "Fenster – kurz durchatmen"

# pause3c
: Sie können jederzeit unterbrechen. Die Geschichte wartet hier auf Sie.
-> d3c

# s4c_ok
call notiz3
-> ende

# s4d
call notiz2
show khadija aufbruch at center flip
: Sie notieren den Besuch. Khadija nickt, steckt die Schulpapiere wieder ein und wendet sich zur Tür.
move khadija to left 0.6s
-> d3d

# d3d
if rolle == "Rachid": gedanke: Wieder eine, die zur Tür geht.
if rolle == "Nadia": gedanke: Die Akte ist kurz. Ist das gut?
: Khadija ist schon an der Tür. Was tun Sie?
? Ich rufe sie zurück und sage ihr wenigstens, wo sie Hilfe findet. -> s4d_ok [gewaehrleisten += 1]
? Ich wünsche ihr alles Gute – mehr kann ich hier nicht tun.         -> ende
hotspot 0.72,0.08,0.22,0.30 -> pause3d "Fenster – kurz durchatmen"

# pause3d
: Sie können jederzeit unterbrechen. Die Geschichte wartet hier auf Sie.
-> d3d

# s4d_ok
call notiz3
-> ende

# ende
hide all fade 0.8
if achten + schuetzen + gewaehrleisten == 3 -> e1
if achten + schuetzen + gewaehrleisten == 2 -> e2
if achten + schuetzen + gewaehrleisten == 1 -> e3
-> e4

# e1
bg kooperative fade 1.5
title "Khadija heute"
show khadija beraterin at center fade 0.8 idle=none
khadija: Heute berate ich andere Frauen in unserer Kooperative. Meine Tochter studiert in Fès.
khadija: An jenem Dienstag hat mir jemand zugehört – in meiner Sprache. Damit fing alles an.
call rueckblick
end e1_beraterin "Khadija berät heute andere Frauen."

# e2
bg stadt fade 1.5
title "Khadija heute"
show khadija zugehoert-gefasst at center fade 0.8 idle=none
khadija: Den Weg in die Stadt habe ich mir selbst gesucht. Es hat länger gedauert. Meine Tochter geht dort zur Schule.
khadija nachdenklich: Auf der Wache wurde ich gehört – aber nicht ganz.
call rueckblick
end e2_eigener_weg "Khadija hat ihren Weg selbst gefunden – auf Umwegen."

# e3
bg dorf fade 1.5
title "Khadija heute"
show khadija gefasst at center fade 0.8 idle=none
khadija: Heute weiß ich, wo ich Hilfe finde. Damals wusste ich es nicht. Eine Nachbarin hat mir den Weg gezeigt – Monate später.
call rueckblick
end e3_spaet "Khadija fand Hilfe – Monate später, an anderer Stelle."

# e4
bg dorf fade 1.5
title "Khadija heute"
show khadija ellenbogen-traurig at center fade 0.8
khadija: Ich bin zurückgegangen. Ich habe geschwiegen. Meine Tochter fragt mich heute, warum.
call rueckblick
end e4_schweigen "Khadija ist zurückgegangen."

# rueckblick
hide khadija fade 0.6
bg gespraech fade 1
show samira rueckblick at right fade 0.5
samira: Schauen wir zurück.
show achten_symbol at 28% fade 0.3
samira rueckblick-verweisen: Achten: {achten > 0 ? "erfüllt" : "verfehlt"}.
if achten == 0: samira: Achten heißt: Wir selbst benachteiligen niemanden – auch nicht wegen ihrer Sprache. So steht es in Marokkos Verfassung von 2011 und in der Allgemeinen Erklärung der Menschenrechte.
hide achten_symbol fade 0.3
show schuetzen_symbol at 28% fade 0.3
samira rueckblick-verweisen: Schützen: {schuetzen > 0 ? "erfüllt" : "verfehlt"}.
if schuetzen == 0: samira: Schützen heißt: Wir handeln, auch wenn die Gefahr aus der eigenen Familie kommt. Dazu hat sich Marokko mit der Frauenrechtskonvention verpflichtet.
hide schuetzen_symbol fade 0.3
show gewaehrleisten_symbol at 28% fade 0.3
samira rueckblick-verweisen: Gewährleisten: {gewaehrleisten > 0 ? "erfüllt" : "verfehlt"}.
if gewaehrleisten == 0: samira: Gewährleisten heißt: Die Rechte müssen bei der Frau ankommen – mit Information in ihrer Sprache und einem nächsten Schritt.
hide gewaehrleisten_symbol fade 0.3
show samira rueckblick at right
if schuetzen == 0: samira: Wer zögert oder zurückweicht, hat oft Angst. Angst ist kein Zeichen von Unsicherheit – sie braucht Schutz, keinen Aufschub.
if achten + schuetzen + gewaehrleisten < 2: samira rueckblick-ernst: Dass Khadija lange allein blieb, war nicht ihr Versagen. Die Hilfe hat gefehlt.
if rolle == "Rachid": samira rueckblick-ernst: „Das regelt die Familie“ – das haben viele von uns gelernt. Alte Gewohnheiten sind stark. Die Pflicht ist stärker.
if rolle == "Nadia": samira rueckblick-ernst: Die Akten stapeln sich, die Zeit ist knapp. Aber eine Stunde für Khadija ist keine verlorene Stunde.
if rolle == "Nadia": samira: Und „Dein Frauenthema“? Schutz vor Gewalt ist kein Frauenthema. Er ist unser aller Dienst.
call x1
samira: Khadijas Geschichte ist erfunden. Die Schreibtische sind echt. Sie können jederzeit neu beginnen und einen anderen Weg gehen.
samira rueckblick-freundlich: Und wenn Sie selbst Gewalt erleben oder erlebt haben: Sie sind nicht allein. Vertrauliche Unterstützung bietet der psychologische Dienst Ihrer Institution, außerdem helfen Beratungsstellen für Frauen.
return
```

Nach der Geschichte folgt das Abschlussquiz auf der Seite „Abschlussquiz“. Wer mehr wissen möchte, findet zuvor die Seite „Vertiefung: Was Marokko zugesagt hat“.

## Vertiefung: Was Marokko zugesagt hat

                                 --{{0}}--
Diese Seite ist freiwillig und zählt nicht zum Quiz. Sie wiederholt die drei Pflichten. Achten heißt: Wir selbst benachteiligen niemanden. Schützen heißt: Wir handeln, auch wenn die Gefahr aus der eigenen Familie kommt. Gewährleisten heißt: Die Rechte kommen bei der Frau an, mit Information in ihrer Sprache und einem nächsten Schritt. Darunter finden Sie Marokkos Zusagen von 1948 bis 2022, wichtige Begriffe und fünf Fragen zum Aufklappen. Zum Schluss die Merkhilfe: Benachteilige ich? Schütze ich? Geht sie mit Information und einem nächsten Schritt?

> Diese Seite ist eine **freiwillige Vertiefung**. Sie wiederholt die drei Pflichten und ordnet Marokkos Zusagen ein. Sie zählt nicht zum Abschlussquiz.

__1. Die drei Pflichten – kurz wiederholt__

* ![Symbol für achten: eine offene Hand](assets/images/symbol-achten.png)<!-- style="width: 2.5em; vertical-align: middle" --> **Achten:** Wir selbst benachteiligen niemanden – nicht wegen des Geschlechts, der Sprache oder der Herkunft. *In der Geschichte:* Khadija einen ruhigen Platz und eine Übersetzerin anbieten.
* ![Symbol für schützen: ein Schutzschild](assets/images/symbol-schuetzen.png)<!-- style="width: 2.5em; vertical-align: middle" --> **Schützen:** Wir handeln, auch wenn die Gefahr von Privatpersonen ausgeht – auch vom eigenen Ehemann. *In der Geschichte:* die Drohungen als Gefährdung aufnehmen statt „Familiensache“.
* ![Symbol für gewährleisten: eine offene Tür mit Licht](assets/images/symbol-gewaehrleisten.png)<!-- style="width: 2.5em; vertical-align: middle" --> **Gewährleisten:** Die Rechte müssen bei der Frau ankommen. *In der Geschichte:* Information in Tamazight und ein nächster Schritt – etwa zur Anlaufstelle für Frauen bei Polizei, Gendarmerie, Gericht oder Krankenhaus.

In der Sprache der Vereinten Nationen heißt diese Dreiteilung *respect, protect, fulfil*.

__2. Marokkos Zusagen auf einen Blick__

<!-- data-type="none" -->
| Jahr | Zusage | Was sie für den Dienst bedeutet |
|---|---|---|
| 1948 | Allgemeine Erklärung der Menschenrechte | Rechte gelten ohne Unterschied nach Geschlecht oder Sprache (Art. 2) – Grundlage, aber kein Vertrag. |
| 1979 | Ratifikation der beiden UN-Pakte | Bürgerliche und politische sowie wirtschaftliche, soziale und kulturelle Rechte sind verbindlich; Marokko berichtet regelmäßig an UN-Ausschüsse. |
| 1993 | Beitritt zur Frauenrechtskonvention | Art. 2: Der Staat muss Diskriminierung von Frauen auch durch Privatpersonen beseitigen. |
| 2004 | Neues Familienrecht (Moudawana, Gesetz 70-03) | Die Familie steht in gemeinsamer Verantwortung beider Ehepartner; Heiratsalter 18 (mit richterlichen Ausnahmen); auch Frauen können die Scheidung beantragen. |
| 2011 | Rücknahme der Vorbehalte zu Art. 9 Abs. 2 und Art. 16 der Konvention; neue Verfassung, Art. 19 | Ehe und Familie fallen voll unter die Gleichberechtigung; Frauen und Männer haben gleiche Rechte und Freiheiten. |
| 2018 | Gesetz 79-14 (Paritätsbehörde) und Gesetz 103-13 gegen Gewalt an Frauen | Mehr dazu in Modul 2. |
| 2022 | Zusatzprotokoll zur Frauenrechtskonvention in Kraft | Frauen können sich an den UN-Ausschuss wenden, wenn der Rechtsweg im Land ausgeschöpft ist. |

__3. Begriffe, die oft verwechselt werden__

* **Erklärung oder Vertrag?** Die Allgemeine Erklärung hat großes politisches Gewicht, wird aber nicht ratifiziert. Pakte und Konventionen binden einen Staat, sobald er sie ratifiziert hat oder ihnen beigetreten ist.
* **Vorbehalt oder Erklärung zu einem Vertrag?** Ein *Vorbehalt* schließt eine Bestimmung aus oder schwächt sie ab; eine *Erklärung* sagt, wie ein Staat eine Bestimmung versteht. Marokko hat 2011 Vorbehalte zurückgenommen; einige Erklärungen, unter anderem zu Art. 2, bestehen weiter.
* **Zusatzprotokoll:** ein eigener Vertrag zur Konvention. Er erlaubt Einzelnen eine Mitteilung an den Ausschuss – erst, wenn der Rechtsweg im Land ausgeschöpft ist (Art. 4).
* **Sorgfaltspflicht:** Der Staat haftet nicht für jede Tat einer Privatperson – aber dafür, ob er mit der gebotenen Sorgfalt verhindert, ermittelt und schützt (Ausschuss der Frauenrechtskonvention, Allgemeine Empfehlung Nr. 19, Abs. 9, und Nr. 35, Abs. 24 b).

__4. Prüfen Sie sich selbst__ (zum Aufklappen, nicht gewertet)

<details><summary>Was unterscheidet die Allgemeine Erklärung von den UN-Pakten?</summary>

Die Erklärung ist kein Vertrag. Die Pakte hat Marokko 1979 ratifiziert – sie sind verbindlich.

</details>

<details><summary>Warum war die Rücknahme des Vorbehalts zu Art. 16 für den Dienstalltag wichtig?</summary>

Ehe und Familie fallen voll unter die Gleichberechtigung. „Familiensache“ ist kein Grund, nicht zu handeln.

</details>

<details><summary>Ein Kollege sagt: „Für Gewalt durch den Ehemann ist der Staat nicht zuständig.“ Was antworten Sie?</summary>

Doch – wegen der Sorgfaltspflicht muss der Staat auch vor Gewalt durch Privatpersonen schützen. Das ist die Pflicht „schützen“.

</details>

<details><summary>Seit wann können sich Frauen aus Marokko an den UN-Ausschuss wenden – und unter welcher Bedingung?</summary>

Seit 2022, mit dem Zusatzprotokoll. Bedingung: Der Rechtsweg im Land ist ausgeschöpft.

</details>

<details><summary>Welche drei Fragen stellen Sie sich am Schalter?</summary>

1. Benachteilige ich sie? (achten)
2. Schütze ich sie, auch wenn es die Familie ist? (schützen)
3. Geht sie mit Information und einem nächsten Schritt? (gewährleisten)

</details>

> **Merkhilfe – drei Fragen am Schalter:** Benachteilige ich? · Schütze ich? · Geht sie mit Information und nächstem Schritt?

## Abschlussquiz

Sechs Fragen zu dem, was Sie in Khadijas Geschichte erlebt haben – mit neuen Beispielen. Bestanden ist das Quiz ab 5 von 6 richtigen Antworten (80 %). Sie können es beliebig oft wiederholen. Mit ▶ lassen Sie sich jede Frage samt Antworten vorlesen.

    {{|>}}
*****
**1.** Eine Frau kann nicht lesen. Man sagt ihr, ohne ausgefülltes Formular werde ihre Anzeige nicht aufgenommen. Welche Pflicht wird hier verfehlt?

<!-- data-solution-button="false" -->
- [(X)] achten
- [( )] schützen
- [( )] gewährleisten
****************************************
**Achten** heißt: Wir selbst benachteiligen niemanden – auch nicht, weil jemand nicht lesen oder unsere Sprache nicht sprechen kann. Nach Artikel 2 der Allgemeinen Erklärung der Menschenrechte gelten die Rechte ohne Unterschied.
****************************************
*****

    {{|>}}
*****
**2.** Eine junge Frau wird online von einem Bekannten bedroht. Ein Kollege sagt: „Was im Internet passiert, ist Privatsache.“ Welche Pflicht verlangt, dass Sie trotzdem handeln?

<!-- data-solution-button="false" -->
- [( )] achten
- [(X)] schützen
- [( )] gewährleisten
****************************************
**Schützen** heißt: Wir handeln, auch wenn die Gefahr von einer Privatperson ausgeht. Die Frauenrechtskonvention verpflichtet den Staat, Diskriminierung von Frauen auch durch Privatpersonen zu beseitigen.
****************************************
*****

    {{|>}}
*****
**3.** Die Gefährdung ist aufgenommen. Die Frau bekommt nur ein Merkblatt in einer Sprache mit, die sie nicht lesen kann. Welche Pflicht ist verfehlt?

<!-- data-solution-button="false" -->
- [( )] achten
- [( )] schützen
- [(X)] gewährleisten
****************************************
**Gewährleisten** heißt: Die Rechte müssen bei der Frau ankommen – mit Information in ihrer Sprache und einem nächsten Schritt.
****************************************
*****

    {{|>}}
*****
**4.** Wo hat Marokko selbst, in seiner eigenen Rechtsordnung, festgeschrieben, dass Frauen und Männer die gleichen Rechte und Freiheiten haben?

<!-- data-solution-button="false" -->
- [(X)] In der Verfassung von 2011, Artikel 19
- [( )] In der Allgemeinen Erklärung der Menschenrechte, Artikel 2
- [( )] In der Frauenrechtskonvention, Artikel 16
****************************************
Die **Verfassung von 2011** ist Marokkos eigene Zusage. Die Allgemeine Erklärung der Menschenrechte und die Frauenrechtskonvention sind internationale Quellen, die diese Zusage stützen.
****************************************
*****

    {{|>}}
*****
**5.** Welcher internationalen Verpflichtung ist Marokko 1993 beigetreten? Nach ihr muss der Staat Diskriminierung von Frauen auch durch Privatpersonen beseitigen.

<!-- data-solution-button="false" -->
- [(X)] Der Frauenrechtskonvention der Vereinten Nationen
- [( )] Der Allgemeinen Erklärung der Menschenrechte
- [( )] Der Verfassung von 2011
****************************************
Marokko trat 1993 der **Frauenrechtskonvention** bei. Artikel 2 verpflichtet den Staat, Diskriminierung auch durch Privatpersonen zu beseitigen. 2011 nahm Marokko außerdem seine Vorbehalte zu Artikel 16 (Ehe und Familie) zurück.
****************************************
*****

    {{|>}}
*****
**6.** Zum Schluss ein Fall: Eine junge Frau sagt Ihnen, ihr Bruder habe gedroht, sie einzusperren, wenn sie weiter arbeiten geht. Sie bittet Sie, dass ihre Familie nichts erfährt. Was tun Sie?

<!-- data-solution-button="false" -->
- [( )] Ich rufe den Bruder an, damit sich die Sache rasch klärt.
- [(X)] Ich nehme die Drohung als Gefährdung auf und erkläre ihr, was jetzt geschieht und wo sie Unterstützung findet.
- [( )] Ich rate ihr, zuerst mit ihren Eltern zu sprechen – die kennen den Bruder am besten.
****************************************
Hier greifen zwei Pflichten ineinander: **Schützen** – die Drohung kommt aus der Familie und ist trotzdem eine Gefährdung, die Sie aufnehmen. **Gewährleisten** – die Frau geht mit Information und einem nächsten Schritt. Den Bruder anzurufen oder sie an die Eltern zu verweisen, übergeht ihre Bitte und kann sie zusätzlich gefährden.
****************************************
*****

## Quellen

1. Verfassung des Königreichs Marokko von 2011, Artikel 19; Dahir Nr. 1-11-91 vom 29.07.2011, Bulletin Officiel Nr. 5964 bis vom 30.07.2011 — https://adala.justice.gov.ma/api/uploads/2024/02/28/costitution-1709118294788.pdf
2. Allgemeine Erklärung der Menschenrechte (1948), Artikel 1 und 2
3. Übereinkommen zur Beseitigung jeder Form von Diskriminierung der Frau (Frauenrechtskonvention, CEDAW), Artikel 2 und 16 — Ratifikationsstand Marokko: https://tbinternet.ohchr.org/_layouts/15/TreatyBodyExternal/Treaty.aspx?CountryID=117&Lang=EN
4. Rücknahme der Vorbehalte 2011: kombinierter 5. und 6. Staatenbericht Marokkos an den CEDAW-Ausschuss — https://nwm.unescwa.org/sites/default/files/2023-09/combined-fifth-and-sixth-periodic-reports-cedaw-morocco-en.pdf
5. Beitritt zum Zusatzprotokoll (in Kraft 22.07.2022): https://treaties.un.org/doc/Publication/UNTS/No%20Volume/20378/A-20378-Morocco-08000002805e0a09.pdf
6. Gesetz Nr. 79-14 über die Behörde für Parität und gegen jede Form von Diskriminierung, Bulletin Officiel Nr. 6644 vom 01.02.2018
7. Zusatzprotokoll zur Frauenrechtskonvention, Art. 4 (Ausschöpfung des innerstaatlichen Rechtswegs): https://www.un.org/womenwatch/daw/cedaw/protocol/text.htm
8. Familiengesetzbuch 2004 (Moudawana), Gesetz Nr. 70-03; Dahir Nr. 1-04-22 vom 03.02.2004, Bulletin Officiel Nr. 5184 vom 05.02.2004 — Art. 4 (Familie unter der Leitung beider Ehegatten), Art. 19 und 20 (Heiratsalter 18, Ausnahme nur durch begründete richterliche Entscheidung), Art. 94 und 98 (Scheidungsantrag auch durch die Ehefrau)
9. Ausschuss der Frauenrechtskonvention: Allgemeine Empfehlung Nr. 19 (1992), Abs. 9, UN-Dok. A/47/38; Allgemeine Empfehlung Nr. 35 (2017), Abs. 24 b), UN-Dok. CEDAW/C/GC/35 — Sorgfaltspflicht des Staates bei Gewalt gegen Frauen durch Privatpersonen
10. Gesetz Nr. 103-13 über die Bekämpfung von Gewalt gegen Frauen und Durchführungsdekret Nr. 2-18-856 (2019): Anlaufstellen für Frauen bei Justiz, Gesundheit, Polizei (DGSN) und Gendarmerie — https://adala.justice.gov.ma/api/uploads/2025/10/23/decret%20%20n%C2%B0%202-18-856%20pris%20pour%20l'application%20de%20la%20loi%20n%C2%B0%20103-13-1761207383620.pdf
