# A)
## Verbindung über cqlsh
![cqlsh](../assets/2025-03-31-14-46-28.png)
# B)
![all queries](../assets/2025-04-07-16-33-17.png)
## Q1
![q1](../assets/2025-04-07-15-47-58.png)
Bei diesem Screen ist es das Ziel alle Berufsbildner und ihre dazugehörigen Lernenden zu bekommen.
Die Partition Key gehört zu den Berufsbildnern, während man für den Cluster Key die Id der Lernenden benutzt.
Das ist der Code dazu:
```cql
CREATE TABLE lernende_by_berufsbildner (
	berufsbildner_id UUID,
	berufsbildner_name TEXT STATIC,
	lernender_id UUID,
	lernender_name TEXT,
	PRIMARY KEY (berufsbildner_id, lernender_id)
);
```
## Q2
![q2](../assets/2025-04-07-15-55-40.png)
Wenn man einen Lerhling ausgewählt hat kann man mit dieser Query seine Prüfungen und Noten darin sehen.
Als Partition Key benutze ich die ID des Lernenden und als Cluster Key die ID der Prüfungen.
```cql
CREATE TABLE pruefungen_by_lernender (
	lernender_id UUID,
	lernender_name TEXT STATIC,
	pruefung_id UUID,
	pruefung_name TEXT,
	pruefung_gewichtung FLOAT,
	pruefung_note FLOAT,
	PRIMARY KEY (lernender_id, pruefung_id)
);

```
## Q3
![q3](../assets/2025-04-07-15-58-00.png)
Diese Query ist unabhängig von den anderen. Damit sieht man alle Prüfungen, die zu einem Semester gehören.
Der Partition Key ist die ID des Semesters. Der Cluster Key ist die ID der Prüfung.
```cql
CREATE TABLE pruefungen_by_semester (
	semester_id UUID,
	pruefung_id UUID,
	pruefung_name TEXT,
	pruefung_date DATE,
	PRIMARY KEY (semester_id, pruefung_id)
);
```
