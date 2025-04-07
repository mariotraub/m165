INSERT INTO lernende_by_berufsbildner (berufsbildner_id, berufsbildner_name, lernender_id, lernender_name)
VALUES (uui, 'Richard', uuid(), 'Mario');
INSERT INTO lernende_by_berufsbildner (berufsbildner_id, berufsbildner_name, lernender_id, lernender_name)
VALUES (uuid(), 'Richard', uuid(), 'Sophie');
INSERT INTO lernende_by_berufsbildner (berufsbildner_id, berufsbildner_name, lernender_id, lernender_name)
VALUES (uuid(), 'Michael', uuid(), 'Lukas');
INSERT INTO lernende_by_berufsbildner (berufsbildner_id, berufsbildner_name, lernender_id, lernender_name)
VALUES (uuid(), 'Petra', uuid(), 'Anna');
INSERT INTO lernende_by_berufsbildner (berufsbildner_id, berufsbildner_name, lernender_id, lernender_name)
VALUES (uuid(), 'Stefan', uuid(), 'Max');

INSERT INTO pruefungen_by_lernender (lernender_id, lernender_name, pruefung_id, pruefung_name, pruefung_gewichtung, pruefung_note)
VALUES (uuid(), 'Mario', uuid(), 'Chemie', 1.0, 5.3);
INSERT INTO pruefungen_by_lernender (lernender_id, lernender_name, pruefung_id, pruefung_name, pruefung_gewichtung, pruefung_note)
VALUES (uuid(), 'Sophie', uuid(), 'Mathematik', 1.5, 4.0);
INSERT INTO pruefungen_by_lernender (lernender_id, lernender_name, pruefung_id, pruefung_name, pruefung_gewichtung, pruefung_note)
VALUES (uuid(), 'Lukas', uuid(), 'Physik', 1.2, 5.0);
INSERT INTO pruefungen_by_lernender (lernender_id, lernender_name, pruefung_id, pruefung_name, pruefung_gewichtung, pruefung_note)
VALUES (uuid(), 'Anna', uuid(), 'Biologie', 1.3, 4.7);
INSERT INTO pruefungen_by_lernender (lernender_id, lernender_name, pruefung_id, pruefung_name, pruefung_gewichtung, pruefung_note)
VALUES (uuid(), 'Max', uuid(), 'Informatik', 1.0, 6.0);


INSERT INTO pruefungen_by_semester (semester_id, pruefung_id, pruefung_name, pruefung_date)
VALUES (uuid(), uuid(), 'Chemie', '2025-03-03');
INSERT INTO pruefungen_by_semester (semester_id, pruefung_id, pruefung_name, pruefung_date)
VALUES (uuid(), uuid(), 'Mathematik', '2025-04-15');
INSERT INTO pruefungen_by_semester (semester_id, pruefung_id, pruefung_name, pruefung_date)
VALUES (uuid(), uuid(), 'Physik', '2025-05-10');
INSERT INTO pruefungen_by_semester (semester_id, pruefung_id, pruefung_name, pruefung_date)
VALUES (uuid(), uuid(), 'Biologie', '2025-06-05');
INSERT INTO pruefungen_by_semester (semester_id, pruefung_id, pruefung_name, pruefung_date)
VALUES (uuid(), uuid(), 'Informatik', '2025-07-20');
