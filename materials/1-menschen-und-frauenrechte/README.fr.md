<!--
author:   André Dietrich
email:    LiaScript@web.de
version:  0.1.0
language: fr
narrator: French Female
comment:  Module 1 du cours « Droits humains, droits des femmes et Loi 103-13 » – les droits humains et les droits des femmes, un engagement que le Maroc a lui-même pris. Version teaser, traduite de l’allemand (projet de traduction, relecture à faire).
import:   https://raw.githubusercontent.com/LiaTemplates/pixijs/0.5.0/README.md
script:   ./assets/portraits/portrait-animation.js

translation: Allemand ./README.md
translation: Anglais  ./README.en.md
translation: Arabe    ./README.ar.md
-->

# Droits humains et droits des femmes

![Un bureau dans un poste ; de l’autre côté, une chaise vide dans la lumière chaude du matin ; par la fenêtre, une oliveraie.](assets/images/titelbild.png)

                                 --{{0}}--
Bienvenue dans le module 1. Vous accompagnez Khadija, une femme qui s’est présentée il y a quelques années dans un poste. Vous êtes vous-même de service, en tant que Rachid ou en tant que Nadia, et vous prenez trois décisions. Un parcours dure environ huit minutes, puis vient un quiz de six questions. Il est question de violence au sein de la famille, mais aucune violence n’est montrée. Vous pouvez faire une pause à tout moment. Et si vous êtes vous-même concernée ou concerné : personne ne devrait porter cela seul. Le service psychologique de votre institution offre un soutien confidentiel ; les centres d’écoute pour femmes peuvent aussi vous aider.

Dans ce module, vous accompagnez Khadija, une femme qui s’est présentée il y a quelques années dans un poste. Vous êtes vous-même de service – en tant que Rachid ou en tant que Nadia – et vous prenez trois décisions. Chacune a des conséquences pour Khadija.

* __Durée :__ environ 8 minutes pour un parcours, puis un quiz final de 6 questions (réussi à partir de 80 %, soit 5 bonnes réponses ; à refaire autant de fois que vous le souhaitez).
* __Contenu :__ il est question de violence au sein de la famille. Aucune violence n’est montrée. Vous pouvez faire une pause à tout moment – l’histoire vous attend.
* __Personnages :__ Khadija, Samira Bennani et tous les autres personnages sont fictifs, composés à partir de nombreuses expériences réelles.
* __Si vous êtes vous-même concernée ou concerné :__ personne ne devrait porter cela seul. Le service psychologique de votre institution offre un soutien confidentiel ; les centres d’écoute pour femmes peuvent aussi vous aider.

__Utiliser l’histoire :__

* Continuer : clic, barre d’espace ou touche Entrée
* Décisions : cliquer, atteindre avec la touche Tab ou appuyer sur les touches 1 et 2
* 🗣 active ou désactive la lecture à voix haute, ↶ revient d’un pas en arrière, ↺ recommence
* Échap quitte la scène

L’histoire commence à la page « L’histoire de Khadija ».

## L’histoire de Khadija

```text @Pixi.story
story modul1-fr "Khadija – Module 1"
lang fr-FR
option tts=on dim=on hint=on
bg   empfang     assets/images/hintergrund-empfang.png        alt="Vue par-dessus votre bureau sur l’accueil d’un poste : une chaise vide, un verre de thé, une fenêtre à la lumière du jour"
bg   gespraech   assets/images/hintergrund-gespraechsraum.png alt="Une salle d’entretien calme avec une petite table, deux chaises, une plante et une fenêtre à la lumière chaude"
bg   dorf        assets/images/hintergrund-olivenhain.png     alt="Une oliveraie dans les collines près de Sefrou, au loin un petit village dans la lumière du matin"
bg   kooperative assets/images/hintergrund-kooperative.png    alt="La salle lumineuse d’une coopérative de femmes, avec de l’huile d’olive, des étagères et une grande table"
bg   stadt       assets/images/hintergrund-stadt-schule.png   alt="Une rue calme en ville, avec l’entrée d’une école le matin"
image achten_symbol        assets/images/symbol-achten.png        type=courseimage height=0.24 y=0.39 alt="Symbole de respecter : une main ouverte"
image schuetzen_symbol     assets/images/symbol-schuetzen.png     type=courseimage height=0.24 y=0.39 alt="Symbole de protéger : un bouclier"
image gewaehrleisten_symbol assets/images/symbol-gewaehrleisten.png type=courseimage height=0.24 y=0.39 alt="Symbole de garantir : une porte ouverte avec de la lumière"
char samira  "Samira Bennani" type=courseportrait portrait=samira height=0.85 idle=none color=#2f6f8f voice="fr-FR"
char khadija "Khadija" type=courseportrait portrait=khadija height=0.85 idle=none color=#7a8b3a voice="fr-FR" pitch=1.1
char kollege "Driss, le collègue" type=courseportrait portrait=driss height=0.7 idle=none color=#8a7a5a voice="fr-FR" pitch=0.85
char ich     "Vous"                base:man color=#555555 voice="fr-FR" pitch=0.95
char gedanke "Votre pensée"        base:man color=#999999 voice="fr-FR" rate=0.9
var rolle = ""
var achten = 0
var schuetzen = 0
var gewaehrleisten = 0
// Approfondissements (signature qui voyage, collègue sceptique) : 1 = teaser, 0 = version finale
var vertiefung = 1

# start
show samira begruessung at center fade 0.6
samira: Bienvenue. Je suis Samira Bennani. J’ai commencé en patrouille ; aujourd’hui, je forme des collègues.
show samira neutral at center
samira: Dans ce module, vous accompagnez une femme qui est venue chez nous, au poste, il y a quelques années. Elle s’appelle Khadija. Son histoire est inventée – composée à partir de nombreuses expériences réelles.
samira ernst: Il est question de violence au sein de la famille. Aucune violence n’est montrée. Si quelque chose vous touche de trop près, faites simplement une pause – l’histoire vous attend.
samira: Vous allez prendre trois décisions. Chacune a des conséquences pour Khadija. Dans quel rôle êtes-vous de service aujourd’hui ?
? En tant que Rachid – gendarme, 49 ans, 23 ans de service -> s1b [rolle = "Rachid"]
? En tant que Nadia – inspectrice de police, 34 ans        -> s1b [rolle = "Nadia"]

# s1b
-> s2

# x1
if vertiefung == 0 -> x1_ende
title "1993" "Le Maroc adhère à la convention de l’ONU sur les droits des femmes (CEDEF)"
title "2011" "Nouvelle Constitution, article 19 : les femmes et les hommes jouissent à égalité des droits et libertés"
title "Aujourd’hui" "Votre bureau"
samira: Le Maroc s’est engagé lui-même. Cet engagement, c’est à un bureau qu’il se tient – au vôtre.
-> x1_ende

# x1_ende
return

# s2
hide samira fade 0.4
bg empfang fade 1
title "Un mardi d’automne" "il y a quelques années"
: Vous êtes {rolle}, de service à l’accueil. Derrière vous, votre collègue Driss range des dossiers.
show kollege at far-left fade 0.5
show khadija schulmappe at center from offright 1s idle=none
khadija: C’était un mardi d’automne. J’avais avec moi les papiers d’inscription de ma fille. Elle devait aller à l’école en ville – et lui ne voulait pas.
khadija: Je n’étais jamais entrée dans un poste. Celle qu’on y voit, on en parle au village. Je parlais tamazight, et très peu la darija.
if rolle == "Rachid": khadija schulmappe: Est-ce qu’il y a une femme ici à qui je peux parler ?
if rolle == "Nadia": khadija schulmappe: Vous n’allez pas le raconter au village ?
kollege skeptisch: Une affaire de famille. Ça se règle chez eux.
if rolle == "Rachid": kollege: Toi et moi, on sait comment ça se passe dans les villages.
if rolle == "Nadia": kollege: C’est ton sujet de femmes, ça, Nadia ?
if vertiefung == 1 -> x2
-> d1

# x2
kollege: Franchement – on n’est pas des assistants sociaux. Ce qui se passe dans une famille, ça ne nous regarde pas.
: Que répondez-vous à Driss ?
? « Une menace n’est pas une affaire privée. L’État doit protéger cette femme. » -> x2_gut
? « Tu as raison – mais c’est le règlement. »                                    -> x2_halb

# x2_gut
kollege nachdenklich: Hmm. Je ne l’avais jamais vu comme ça.
-> d1

# x2_halb
kollege: Le règlement, c’est le règlement. Si tu le dis.
: Driss hausse les épaules. Un règlement ne le convainc pas – une raison, peut-être.
-> d1

# d1
if rolle == "Rachid": gedanke: Il y a des années, une femme s’est déjà tenue ici. Tu l’as renvoyée chez elle.
if rolle == "Nadia": gedanke: Quatorze dossiers en cours. Dans une heure, c’est la relève.
: Khadija se tient devant votre bureau. Que faites-vous ?
? Je lui propose un endroit calme et un entretien en tamazight. -> s3a [achten += 1]
? Je prends rapidement ses informations au guichet – la file est longue. -> s3b
hotspot 0.72,0.08,0.22,0.30 -> pause1 "Fenêtre – respirer un instant"

# pause1
: Vous pouvez faire une pause à tout moment. L’histoire vous attend ici.
-> d1

# notiz1
title "Fiche – respecter"
show achten_symbol at 28% fade 0.4
show samira notiz-verweisen at right fade 0.4
samira: Le Maroc se l’est promis à lui-même : selon la Constitution de 2011, article 19, les femmes et les hommes jouissent à égalité des droits et libertés.
samira: Dès 1979, le Maroc a ratifié les deux Pactes internationaux des Nations Unies relatifs aux droits de l’homme.
samira: Et au niveau international : selon l’article 2 de la Déclaration universelle des droits de l’homme, ces droits valent sans distinction – y compris de sexe ou de langue.
samira notiz-verweisen: Respecter, c’est : nous-mêmes, nous ne désavantageons personne. Pas même parce que quelqu’un ne parle pas notre langue.
hide samira fade 0.4
hide achten_symbol fade 0.4
return

# s3a
call notiz1
hide kollege fade 0.4
bg gespraech fade 1
show khadija at center fade 0.5 idle=none
if rolle == "Rachid": ich: Asseyez-vous. Nous pouvons parler tamazight. Et si vous préférez parler à une femme, j’appelle une collègue de la cellule de prise en charge des femmes.
if rolle == "Nadia": ich: Asseyez-vous. Ce que vous dites ici reste ici. Ma collègue Amina parle tamazight, elle va nous aider.
show khadija zugehoert at center
: Khadija pose le cartable devant elle sur la table. Ses mains se desserrent.
hide khadija fade 0.5
bg kooperative fade 1.5
khadija: L’argent de la coopérative – ma part de la récolte d’olives – il me le prend. Chaque mois.
bg dorf fade 1.5
khadija: Et il a dit : si je pars en ville avec la petite, je ne la reverrai jamais.
bg gespraech fade 1.5
show khadija traurig at center fade 0.5
khadija: Je veux seulement qu’elle aille à l’école.
-> d2a

# d2a
if rolle == "Rachid": gedanke: La réconciliation – tu l’as toujours crue la voie la plus sage.
if rolle == "Nadia": gedanke: Si tu enregistres ça, ça fera un long dossier.
: Khadija vous a parlé de menaces et d’argent retenu. Que faites-vous ?
? J’enregistre les menaces et la privation d’argent comme une mise en danger – même de la part du mari. -> s4a [schuetzen += 1]
? Je propose un entretien avec les deux – ça se règle en famille.                                        -> s4b
hotspot 0.72,0.08,0.22,0.30 -> pause2a "Fenêtre – respirer un instant"

# pause2a
: Vous pouvez faire une pause à tout moment. L’histoire vous attend ici.
-> d2a

# s3b
call notiz1
hide kollege fade 0.4
hide khadija fade 0.8
: La chaise devant votre bureau est vide. À côté, un verre de thé à moitié plein.
khadija: Je suis partie. Au guichet, devant tout le monde, je ne pouvais pas dire ce qui se passait.
khadija: Trois semaines plus tard, je suis revenue. Cette fois tôt le matin, quand il n’y avait personne.
show khadija schulmappe-traurig at center from offright 1s
khadija: Il me prend l’argent de la coopérative. Et il dit que je ne reverrai jamais ma fille si je pars.
-> d2b

# d2b
if rolle == "Rachid": gedanke: La réconciliation – tu l’as toujours crue la voie la plus sage.
if rolle == "Nadia": gedanke: Si tu enregistres ça, ça fera un long dossier.
: Khadija est revenue. Que faites-vous ?
? Je la conduis dans la salle d’entretien et j’enregistre la mise en danger.      -> s4c [schuetzen += 1]
? Je note sa visite et je lui conseille de parler d’abord avec sa famille.        -> s4d
hotspot 0.72,0.08,0.22,0.30 -> pause2b "Fenêtre – respirer un instant"

# pause2b
: Vous pouvez faire une pause à tout moment. L’histoire vous attend ici.
-> d2b

# notiz2
title "Fiche – protéger"
show schuetzen_symbol at 28% fade 0.4
show samira notiz-verweisen at right fade 0.4
samira: En 1993, le Maroc a adhéré à la Convention des Nations Unies sur l’élimination de toutes les formes de discrimination à l’égard des femmes, la CEDEF. Son article 2 oblige l’État à éliminer la discrimination à l’égard des femmes, y compris par des personnes privées. Dans une déclaration, le Maroc a précisé comment il comprend cet article – vous en saurez plus dans l’approfondissement.
samira: En 2011, le Maroc a levé une restriction antérieure à l’article 16 – l’article sur le mariage et la famille. Les spécialistes appellent une telle restriction une « réserve ». La famille n’est pas une zone de non-droit.
samira notiz-verweisen-ernst: Protéger, c’est : nous agissons, même quand le danger vient de la famille elle-même.
hide samira fade 0.4
hide schuetzen_symbol fade 0.4
return

# notiz3
title "Fiche – garantir"
show gewaehrleisten_symbol at 28% fade 0.4
show samira notiz-verweisen at right fade 0.4
samira: Garantir, c’est : les droits doivent aussi parvenir jusqu’à la femme. Elle repart de chez nous avec des informations dans sa langue et une prochaine étape.
samira: La police, la gendarmerie, les tribunaux et les hôpitaux disposent de cellules de prise en charge des femmes victimes de violence. Comment y accompagner les femmes, vous l’apprendrez dans les prochains modules.
hide samira fade 0.4
hide gewaehrleisten_symbol fade 0.4
return

# s4a
call notiz2
show khadija at center fade 0.5 idle=none
: La mise en danger est enregistrée. Khadija se lève, son sac à la main.
khadija besorgt: Et maintenant ? Je dois rentrer avant la nuit.
-> d3a

# d3a
if rolle == "Rachid": gedanke: De quoi la femme d’autrefois aurait-elle eu besoin ?
if rolle == "Nadia": gedanke: Dehors, elle est seule – dans une langue que nos formulaires ne parlent pas.
: Avant que Khadija ne parte – que faites-vous ?
? Je lui explique en tamazight ce qui va se passer et où elle peut trouver de l’aide. -> s4a_ok [gewaehrleisten += 1]
? Je lui dis que nous la contacterons dès qu’il y aura du nouveau.                     -> ende
hotspot 0.72,0.08,0.22,0.30 -> pause3a "Fenêtre – respirer un instant"

# pause3a
: Vous pouvez faire une pause à tout moment. L’histoire vous attend ici.
-> d3a

# s4a_ok
call notiz3
-> ende

# s4b
call notiz2
bg empfang fade 1
show kollege at far-left fade 0.5
show khadija besorgt at center fade 0.5 idle=none
: Sur votre proposition, Driss appelle son mari.
show kollege telefon at far-left
kollege: Il sera là dans une demi-heure.
show khadija ellenbogen at center
: Khadija serre les bras contre son corps. Une main entoure son propre coude.
khadija ellenbogen-traenen: Je ne lui avais pas dit que j’étais ici.
show kollege neutral at far-left
: Une larme coule sur la joue de Khadija. Une demi-heure plus tard, son mari est à l’accueil. Khadija ne dit plus un mot.
show khadija ellenbogen-traurig at center
-> d3b

# d3b
if rolle == "Rachid": gedanke: C’est comme ça que ça s’était passé, à l’époque. Tout calmement.
if rolle == "Nadia": gedanke: Elle t’a demandé de ne rien dire au village. Maintenant, il est là.
: Que faites-vous avant qu’ils ne partent ?
? Je lui parle encore une fois en tête-à-tête et je lui dis où trouver de l’aide. -> s4b_ok [gewaehrleisten += 1]
? Je les laisse partir – après tout, ils se sont parlé.                        -> ende
hotspot 0.72,0.08,0.22,0.30 -> pause3b "Fenêtre – respirer un instant"

# pause3b
: Vous pouvez faire une pause à tout moment. L’histoire vous attend ici.
-> d3b

# s4b_ok
call notiz3
-> ende

# s4c
call notiz2
hide kollege fade 0.4
bg gespraech fade 1
show khadija at center fade 0.5 idle=none
: Dans la salle d’entretien, vous enregistrez la mise en danger, en tamazight. Khadija parle doucement, mais elle dit tout.
khadija zugehoert-gefasst: Cette fois, quelqu’un m’a écoutée.
-> d3c

# d3c
if rolle == "Rachid": gedanke: De quoi la femme d’autrefois aurait-elle eu besoin ?
if rolle == "Nadia": gedanke: Dehors, elle est seule – dans une langue que nos formulaires ne parlent pas.
: Avant que Khadija ne parte – que faites-vous ?
? Je lui explique en tamazight ce qui va se passer et où elle peut trouver de l’aide. -> s4c_ok [gewaehrleisten += 1]
? Je lui dis que nous la contacterons dès qu’il y aura du nouveau.                     -> ende
hotspot 0.72,0.08,0.22,0.30 -> pause3c "Fenêtre – respirer un instant"

# pause3c
: Vous pouvez faire une pause à tout moment. L’histoire vous attend ici.
-> d3c

# s4c_ok
call notiz3
-> ende

# s4d
call notiz2
show khadija aufbruch at center flip
: Vous notez sa visite. Khadija hoche la tête, range les papiers d’inscription et se tourne vers la porte.
move khadija to left 0.6s
-> d3d

# d3d
if rolle == "Rachid": gedanke: Encore une qui repart vers la porte.
if rolle == "Nadia": gedanke: Le dossier est court. Est-ce une bonne chose ?
: Khadija est déjà à la porte. Que faites-vous ?
? Je la rappelle et je lui dis au moins où trouver de l’aide.  -> s4d_ok [gewaehrleisten += 1]
? Je lui souhaite bonne chance – je ne peux pas faire plus ici. -> ende
hotspot 0.72,0.08,0.22,0.30 -> pause3d "Fenêtre – respirer un instant"

# pause3d
: Vous pouvez faire une pause à tout moment. L’histoire vous attend ici.
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
title "Khadija aujourd’hui"
show khadija beraterin at center fade 0.8 idle=none
khadija: Aujourd’hui, je conseille d’autres femmes dans notre coopérative. Ma fille fait ses études à Fès.
khadija: Ce mardi-là, quelqu’un m’a écoutée – dans ma langue. C’est là que tout a commencé.
call rueckblick
end e1_beraterin "Khadija conseille aujourd’hui d’autres femmes."

# e2
bg stadt fade 1.5
title "Khadija aujourd’hui"
show khadija zugehoert-gefasst at center fade 0.8 idle=none
khadija: Le chemin vers la ville, je l’ai trouvé moi-même. Ça a pris plus de temps. Ma fille va à l’école là-bas.
khadija nachdenklich: Au poste, on m’a écoutée – mais pas jusqu’au bout.
call rueckblick
end e2_eigener_weg "Khadija a trouvé son chemin elle-même – par des détours."

# e3
bg dorf fade 1.5
title "Khadija aujourd’hui"
show khadija gefasst at center fade 0.8 idle=none
khadija: Aujourd’hui, je sais où trouver de l’aide. À l’époque, je ne le savais pas. Une voisine m’a montré le chemin – des mois plus tard.
call rueckblick
end e3_spaet "Khadija a trouvé de l’aide – des mois plus tard, ailleurs."

# e4
bg dorf fade 1.5
title "Khadija aujourd’hui"
show khadija ellenbogen-traurig at center fade 0.8
khadija: Je suis rentrée. Je me suis tue. Aujourd’hui, ma fille me demande pourquoi.
call rueckblick
end e4_schweigen "Khadija est rentrée chez elle."

# rueckblick
hide khadija fade 0.6
bg gespraech fade 1
show samira rueckblick at right fade 0.5
samira: Revenons sur votre parcours.
show achten_symbol at 28% fade 0.3
samira rueckblick-verweisen: Respecter : {achten > 0 ? "obligation remplie" : "obligation manquée"}.
if achten == 0: samira: Respecter, c’est : nous-mêmes, nous ne désavantageons personne – pas même à cause de sa langue. C’est ce que disent la Constitution marocaine de 2011 et la Déclaration universelle des droits de l’homme.
hide achten_symbol fade 0.3
show schuetzen_symbol at 28% fade 0.3
samira rueckblick-verweisen: Protéger : {schuetzen > 0 ? "obligation remplie" : "obligation manquée"}.
if schuetzen == 0: samira: Protéger, c’est : nous agissons, même quand le danger vient de la famille elle-même. Le Maroc s’y est engagé avec la CEDEF.
hide schuetzen_symbol fade 0.3
show gewaehrleisten_symbol at 28% fade 0.3
samira rueckblick-verweisen: Garantir : {gewaehrleisten > 0 ? "obligation remplie" : "obligation manquée"}.
if gewaehrleisten == 0: samira: Garantir, c’est : les droits doivent parvenir jusqu’à la femme – avec des informations dans sa langue et une prochaine étape.
hide gewaehrleisten_symbol fade 0.3
show samira rueckblick at right
if schuetzen == 0: samira: Une femme qui hésite ou qui recule a souvent peur. La peur n’est pas un signe d’incertitude – elle demande une protection, pas un report.
if achten + schuetzen + gewaehrleisten < 2: samira rueckblick-ernst: Si Khadija est restée longtemps seule, ce n’était pas son échec. C’est l’aide qui a manqué.
if rolle == "Rachid": samira rueckblick-ernst: « C’est à la famille de régler ça » – beaucoup d’entre nous l’ont appris. Les vieilles habitudes sont fortes. Le devoir est plus fort.
if rolle == "Nadia": samira rueckblick-ernst: Les dossiers s’empilent, le temps manque. Mais une heure pour Khadija n’est pas une heure perdue.
if rolle == "Nadia": samira: Et « ton sujet de femmes » ? La protection contre la violence n’est pas un sujet de femmes. C’est notre service à tous.
call x1
samira: L’histoire de Khadija est inventée. Les bureaux, eux, sont réels. Vous pouvez recommencer à tout moment et choisir un autre chemin.
samira rueckblick-freundlich: Et si vous vivez ou avez vécu vous-même de la violence : personne ne devrait porter cela seul. Le service psychologique de votre institution offre un soutien confidentiel ; les centres d’écoute pour femmes peuvent aussi vous aider.
return
```

Après l’histoire vient le quiz final, à la page « Quiz final ». Pour en savoir plus, consultez d’abord la page « Approfondissement : les engagements du Maroc ».

## Approfondissement : les engagements du Maroc

                                 --{{0}}--
Cette page est facultative et ne compte pas pour le quiz. Elle reprend les trois obligations. Respecter, c’est : nous-mêmes, nous ne désavantageons personne. Protéger, c’est : nous agissons, même quand le danger vient de la famille elle-même. Garantir, c’est : les droits parviennent jusqu’à la femme, avec des informations dans sa langue et une prochaine étape. Vous trouverez ensuite les engagements du Maroc de 1948 à 2022, des notions importantes et cinq questions à déplier. Pour finir, l’aide-mémoire : Est-ce que je désavantage ? Est-ce que je protège ? Repart-elle avec des informations et une prochaine étape ?

> Cette page est un **approfondissement facultatif**. Elle reprend les trois obligations et situe les engagements du Maroc. Elle ne compte pas pour le quiz final.

__1. Les trois obligations – en bref__

* ![Symbole de respecter : une main ouverte](assets/images/symbol-achten.png)<!-- style="width: 2.5em; vertical-align: middle" --> **Respecter :** nous-mêmes, nous ne désavantageons personne – ni en raison du sexe, ni de la langue, ni de l’origine. *Dans l’histoire :* proposer à Khadija un endroit calme et une interprète.
* ![Symbole de protéger : un bouclier](assets/images/symbol-schuetzen.png)<!-- style="width: 2.5em; vertical-align: middle" --> **Protéger :** nous agissons, même quand le danger vient de personnes privées – y compris du mari. *Dans l’histoire :* enregistrer les menaces comme une mise en danger au lieu de parler d’« affaire de famille ».
* ![Symbole de garantir : une porte ouverte avec de la lumière](assets/images/symbol-gewaehrleisten.png)<!-- style="width: 2.5em; vertical-align: middle" --> **Garantir :** les droits doivent parvenir jusqu’à la femme. *Dans l’histoire :* des informations en tamazight et une prochaine étape – par exemple vers la cellule de prise en charge des femmes de la police, de la gendarmerie, du tribunal ou de l’hôpital.

Dans le langage des Nations Unies, ce sont les obligations de *respecter, protéger et mettre en œuvre* (en anglais : *respect, protect, fulfil*). « Garantir » correspond ici à « mettre en œuvre ».

__2. Les engagements du Maroc en un coup d’œil__

<!-- data-type="none" -->
| Année | Engagement | Ce que cela signifie pour le service |
|---|---|---|
| 1948 | Déclaration universelle des droits de l’homme | Les droits valent sans distinction de sexe ou de langue (art. 2) – c’est la base, mais pas un traité. |
| 1979 | Ratification des deux Pactes internationaux | Les droits civils et politiques ainsi que les droits économiques, sociaux et culturels sont contraignants ; le Maroc fait régulièrement rapport aux comités de l’ONU. |
| 1993 | Adhésion à la CEDEF | Art. 2 : l’État doit éliminer la discrimination à l’égard des femmes, y compris par des personnes privées. |
| 2004 | Nouveau Code de la famille (Moudawana, loi 70-03) | La famille est placée sous la responsabilité conjointe des deux époux ; âge du mariage 18 ans (avec dérogations judiciaires) ; les femmes aussi peuvent demander le divorce. |
| 2011 | Levée des réserves à l’art. 9, al. 2, et à l’art. 16 de la Convention ; nouvelle Constitution, art. 19 | Le mariage et la famille relèvent pleinement de l’égalité ; les femmes et les hommes jouissent à égalité des droits et libertés. |
| 2018 | Loi 79-14 (Autorité pour la parité) et loi 103-13 relative à la lutte contre les violences faites aux femmes | Plus de détails dans le module 2. |
| 2022 | Entrée en vigueur du Protocole facultatif à la CEDEF | Les femmes peuvent s’adresser au Comité de l’ONU une fois les voies de recours internes épuisées. |

__3. Des notions souvent confondues__

* **Déclaration ou traité ?** La Déclaration universelle a un grand poids politique, mais elle n’est pas ratifiée. Les pactes et les conventions lient un État dès qu’il les a ratifiés ou qu’il y a adhéré.
* **Réserve ou déclaration interprétative ?** Une *réserve* exclut une disposition ou en limite la portée ; une *déclaration* indique comment un État comprend une disposition. Le Maroc a levé des réserves en 2011 ; certaines déclarations, notamment sur l’art. 2, restent en vigueur.
* **Protocole facultatif :** un traité distinct, rattaché à la Convention. Il permet à une personne d’adresser une communication au Comité – seulement une fois les voies de recours internes épuisées (art. 4).
* **Devoir de diligence :** l’État ne répond pas de chaque acte d’une personne privée – mais il répond de la diligence avec laquelle il prévient, enquête et protège (Comité de la CEDEF, recommandation générale n° 19, par. 9, et n° 35, par. 24 b).

__4. Testez-vous__ (à déplier, non noté)

<details><summary>Qu’est-ce qui distingue la Déclaration universelle des Pactes de l’ONU ?</summary>

La Déclaration n’est pas un traité. Les Pactes, le Maroc les a ratifiés en 1979 – ils sont contraignants.

</details>

<details><summary>Pourquoi la levée de la réserve à l’art. 16 a-t-elle compté pour le travail quotidien ?</summary>

Le mariage et la famille relèvent pleinement de l’égalité. « Affaire de famille » n’est pas une raison de ne pas agir.

</details>

<details><summary>Un collègue dit : « Pour la violence du mari, l’État n’est pas compétent. » Que lui répondez-vous ?</summary>

Si – en vertu du devoir de diligence, l’État doit aussi protéger contre la violence exercée par des personnes privées. C’est l’obligation « protéger ».

</details>

<details><summary>Depuis quand les femmes du Maroc peuvent-elles s’adresser au Comité de l’ONU – et à quelle condition ?</summary>

Depuis 2022, avec le Protocole facultatif. Condition : les voies de recours internes sont épuisées.

</details>

<details><summary>Quelles trois questions vous posez-vous au guichet ?</summary>

1. Est-ce que je la désavantage ? (respecter)
2. Est-ce que je la protège, même quand il s’agit de la famille ? (protéger)
3. Repart-elle avec des informations et une prochaine étape ? (garantir)

</details>

> **Aide-mémoire – trois questions au guichet :** Est-ce que je désavantage ? · Est-ce que je protège ? · Repart-elle avec des informations et une prochaine étape ?

## Quiz final

Six questions sur ce que vous avez vécu dans l’histoire de Khadija – avec de nouveaux exemples. Le quiz est réussi à partir de 5 bonnes réponses sur 6 (80 %). Vous pouvez le refaire autant de fois que vous le souhaitez. Avec ▶, vous pouvez écouter chaque question et ses réponses.

    {{|>}}
*****
**1.** Une femme ne sait pas lire. On lui dit que sans formulaire rempli, sa plainte ne sera pas enregistrée. Quelle obligation est manquée ici ?

<!-- data-solution-button="false" -->
- [(X)] respecter
- [( )] protéger
- [( )] garantir
****************************************
**Respecter**, c’est : nous-mêmes, nous ne désavantageons personne – pas même parce que quelqu’un ne sait pas lire ou ne parle pas notre langue. Selon l’article 2 de la Déclaration universelle des droits de l’homme, les droits valent sans distinction.
****************************************
*****

    {{|>}}
*****
**2.** Une jeune femme est menacée en ligne par une connaissance. Un collègue dit : « Ce qui se passe sur Internet, c’est privé. » Quelle obligation exige que vous agissiez quand même ?

<!-- data-solution-button="false" -->
- [( )] respecter
- [(X)] protéger
- [( )] garantir
****************************************
**Protéger**, c’est : nous agissons, même quand le danger vient d’une personne privée. La CEDEF oblige l’État à éliminer la discrimination à l’égard des femmes, y compris par des personnes privées.
****************************************
*****

    {{|>}}
*****
**3.** La mise en danger est enregistrée. La femme repart seulement avec une notice dans une langue qu’elle ne sait pas lire. Quelle obligation est manquée ?

<!-- data-solution-button="false" -->
- [( )] respecter
- [( )] protéger
- [(X)] garantir
****************************************
**Garantir**, c’est : les droits doivent parvenir jusqu’à la femme – avec des informations dans sa langue et une prochaine étape.
****************************************
*****

    {{|>}}
*****
**4.** Où le Maroc a-t-il inscrit lui-même, dans son propre ordre juridique, que les femmes et les hommes jouissent à égalité des droits et libertés ?

<!-- data-solution-button="false" -->
- [(X)] Dans la Constitution de 2011, article 19
- [( )] Dans la Déclaration universelle des droits de l’homme, article 2
- [( )] Dans la CEDEF, article 16
****************************************
La **Constitution de 2011** est l’engagement propre du Maroc. La Déclaration universelle des droits de l’homme et la CEDEF sont des sources internationales qui appuient cet engagement.
****************************************
*****

    {{|>}}
*****
**5.** À quel engagement international le Maroc a-t-il adhéré en 1993 ? Selon cet engagement, l’État doit éliminer la discrimination à l’égard des femmes, y compris par des personnes privées.

<!-- data-solution-button="false" -->
- [(X)] La Convention des Nations Unies sur l’élimination de toutes les formes de discrimination à l’égard des femmes (CEDEF)
- [( )] La Déclaration universelle des droits de l’homme
- [( )] La Constitution de 2011
****************************************
En 1993, le Maroc a adhéré à la **CEDEF**. Son article 2 oblige l’État à éliminer la discrimination, y compris par des personnes privées. En 2011, le Maroc a en outre levé ses réserves à l’article 16 (mariage et famille).
****************************************
*****

    {{|>}}
*****
**6.** Pour finir, un cas : une jeune femme vous dit que son frère a menacé de l’enfermer si elle continue à travailler. Elle vous demande que sa famille n’en sache rien. Que faites-vous ?

<!-- data-solution-button="false" -->
- [( )] J’appelle le frère pour que l’affaire se règle rapidement.
- [(X)] J’enregistre la menace comme une mise en danger et je lui explique ce qui va se passer et où elle peut trouver du soutien.
- [( )] Je lui conseille de parler d’abord à ses parents – ce sont eux qui connaissent le mieux son frère.
****************************************
Ici, deux obligations s’imbriquent : **protéger** – la menace vient de la famille et reste pourtant une mise en danger que vous enregistrez. **Garantir** – la femme repart avec des informations et une prochaine étape. Appeler le frère ou la renvoyer vers ses parents ignore sa demande et peut la mettre davantage en danger.
****************************************
*****

## Sources

1. Constitution du Royaume du Maroc de 2011, article 19 ; Dahir n° 1-11-91 du 29 juillet 2011, Bulletin officiel n° 5964 bis du 30 juillet 2011 — https://adala.justice.gov.ma/api/uploads/2024/02/28/costitution-1709118294788.pdf
2. Déclaration universelle des droits de l’homme (1948), articles 1 et 2
3. Convention sur l’élimination de toutes les formes de discrimination à l’égard des femmes (CEDEF), articles 2 et 16 — état des ratifications du Maroc : https://tbinternet.ohchr.org/_layouts/15/TreatyBodyExternal/Treaty.aspx?CountryID=117&Lang=EN
4. Levée des réserves en 2011 : cinquième et sixième rapports périodiques combinés du Maroc au Comité de la CEDEF — https://nwm.unescwa.org/sites/default/files/2023-09/combined-fifth-and-sixth-periodic-reports-cedaw-morocco-en.pdf
5. Adhésion au Protocole facultatif (en vigueur le 22 juillet 2022) : https://treaties.un.org/doc/Publication/UNTS/No%20Volume/20378/A-20378-Morocco-08000002805e0a09.pdf
6. Loi n° 79-14 relative à l’Autorité pour la parité et la lutte contre toutes formes de discrimination, Bulletin officiel n° 6644 du 1er février 2018
7. Protocole facultatif à la CEDEF, art. 4 (épuisement des voies de recours internes) : https://www.un.org/womenwatch/daw/cedaw/protocol/text.htm
8. Code de la famille 2004 (Moudawana), loi n° 70-03 ; Dahir n° 1-04-22 du 3 février 2004, Bulletin officiel n° 5184 du 5 février 2004 — art. 4 (famille placée sous la responsabilité conjointe des deux époux), art. 19 et 20 (âge du mariage 18 ans, dérogation uniquement par décision judiciaire motivée), art. 94 et 98 (demande de divorce aussi par l’épouse)
9. Comité de la CEDEF : recommandation générale n° 19 (1992), par. 9, doc. ONU A/47/38 ; recommandation générale n° 35 (2017), par. 24 b), doc. ONU CEDAW/C/GC/35 — devoir de diligence de l’État face aux violences faites aux femmes par des personnes privées
10. Loi n° 103-13 relative à la lutte contre les violences faites aux femmes et décret d’application n° 2-18-856 (2019) : cellules de prise en charge des femmes auprès de la justice, de la santé, de la police (DGSN) et de la gendarmerie — https://adala.justice.gov.ma/api/uploads/2025/10/23/decret%20%20n%C2%B0%202-18-856%20pris%20pour%20l'application%20de%20la%20loi%20n%C2%B0%20103-13-1761207383620.pdf
