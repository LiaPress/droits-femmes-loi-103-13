# Sichtprüfung von Sprechen und Blinzeln

Stand: 18.10.2026. Geprüft wurden die vergrößerten Einzelstellungen aller 15 Ausdrücke, zeitlich aufgenommene Browserbilder und die tatsächlich laufende PixiJS-Bühne mit Sprechphasen aller drei Figuren. Die Befunde beziehen sich auf diese Bilder und Zeitproben; die Audioausgabe wurde nicht auf Laut-für-Laut-Synchronität untersucht.

## Verbesserungsdurchgänge

1. In der ersten Fassung fielen doppelte Lippenlinien im überblendeten Zwischenbild und zu tief sitzende Augenmasken bei Khadijas besorgtem und seitlichem Blick auf. Diese Fassung wurde verworfen.
2. Das Zwischenbild wird nun aus einer vertikal verkleinerten Mundöffnung gewonnen, ohne es dauerhaft mit den geschlossenen Lippen zu mischen. Die Mund- und Augenpositionen der geneigten Ausdrücke wurden korrigiert. Nach der erneuten Prüfung sind die Lippenkonturen sauberer, und die Lider schließen über den tatsächlichen Augen. Die individuellen Blinzelzeitpunkte sind versetzt.
3. Die Einbindung wurde zusätzlich auf der echten PixiJS-Bühne geprüft. Eine zunächst fehlerhafte Auflösung der Bildpfade bei von LiaScript eingebetteten Skripten wurde behoben. Sprechphasen von Samira, Khadija und Driss laufen mit mehreren Mundstellungen; das vollständige Kursskript wird ohne Parserfehler geladen.

## Gestalterisches Urteil

Meine eigene Einschätzung erreicht für alle drei Figuren etwa die gewünschten 90 % Zufriedenheit als ruhige, stilisierte Kursanimation. Diese Zahl ist ein subjektives Qualitätsurteil und keine gemessene Wirkung bei Lernenden.

| Figur | Ergebnis der Sichtprüfung |
|---|---|
| Khadija | Zurückhaltende Mundöffnungen, korrigierter seitlicher und besorgter Blick; Kopftuch und Körper bleiben fest. Die nachdenkliche Haltung wirkt bewusst leiser. |
| Samira | Mehrere klare Mundstellungen; Blinzeln hinter den vorhandenen Brillenrändern. Gesicht und Brille springen nicht. |
| Driss | Kleine, zum Bart passende Mundbewegungen; geneigter Kopf und Bartkontur bleiben stabil. Die Lidbewegung bleibt kurz. |

## Nachweise

1. Browser-Pixelvergleich: 90 Mund-/Lidvarianten für 15 Ausdrücke; keine geänderten Pixel außerhalb der jeweiligen Mund-/Augenmasken; jede Variante enthält tatsächlich geänderte Pixel.
2. Zeitprüfung über 24 simulierte Sekunden pro Figur: mehrere Mundstellungen, 5–6 Blinzler, Rückkehr in den geschlossenen Ruhemund. Bei „Bewegung reduzieren“ werden die dekorativen Lidbewegungen ausgelassen.
3. Echtes PixiJS: alle drei Figuren geladen und beim Sprechen ausprobiert; keine JavaScript- oder Ladefehler; tatsächliches Kursskript mit 245 Anweisungen ohne Parserfehler.
4. Materialprüfung im LiaScript-DevServer: 5 Folien, 5 Quizze, keine fehlenden Bilder und keine vom Prüfskript erfassten Browserfehler. Dies ist keine vollständige neue fachliche Kursvalidierung und keine erneute Prüfung aller Entscheidungswege.

Die technischen Messungen stehen in `browser-verification.json` und `pixijs-verification.json`. Die GIF-Vorschau zeigt einen zeitlich abgetasteten Ausschnitt; in `review.html` lassen sich die Ausdrücke einzeln ansehen.

## Verbleibende Grenzen

- Die Mundwahl ist textgestützt und stilisiert. Sie ist keine exakte phonetische Lippensynchronisation zum Audio des Browsers.
- Ein bewusster Wechsel des Gesichtsausdrucks darf die Pose wechseln; innerhalb einer Sprech- oder Blinzelbewegung bleibt die Pose unverändert.
- Kopf, Wangen und Unterkiefer werden bewusst nicht als Ganzes bewegt. Das erhält die gewünschte Stabilität, begrenzt aber die Annäherung an eine gefilmte Person.
