# A)
## Schema in Worten  
- Lernender
    - Ein Lernender hat n Prüfungen und darin eine Note
    - Ein Lernender hat 1 Berufsbildner
- Berufsbildner
    - Ein Berufsbildner hat n Lernende
- Prüfung
    - Eine Prüfung hat
        - Note
        - Gewichtung
        - Name
        - Datum
    - Eine Prüfung ist Teil von einem Semester
    - Eine Prüfung gehört zu einem Lernenden
- Semester
    - Ein Semester hat
        - StartDatum
        - EndDatum
## Konzeptionelles Diagramm
![Png des Schemas](./scheme_konzeptionell.png)
[*.drawio Datei](./scheme_konzeptionell.drawio)
# B) Schema als Diagramm
![Png des Schemas](./scheme.png)
[*.drawio Datei](./scheme.drawio)
> [!NOTE]
> Ich habe mich für die Verschachtelung beim Semester entschieden, da das nur ein kleines Objekt ist,
> bei dem Redundanzen kein Problem sind
# C)
[Init-Script der DB und Collections](./init.js)
