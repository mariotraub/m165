CREATE TABLE lernende_by_berufsbildner (
	berufsbildner_id UUID,
	berufsbildner_name TEXT STATIC,
	lernender_id UUID,
	lernender_name TEXT,
	PRIMARY KEY (berufsbildner_id, lernender_id)
);

CREATE TABLE pruefungen_by_lernender (
	lernender_id UUID,
	lernender_name TEXT STATIC,
	pruefung_id UUID,
	pruefung_name TEXT,
	pruefung_gewichtung FLOAT,
	pruefung_note FLOAT,
	PRIMARY KEY (lernender_id, pruefung_id)
);

CREATE TABLE pruefungen_by_semester (
	semester_id UUID,
	pruefung_id UUID,
	pruefung_name TEXT,
	pruefung_date DATE,
	PRIMARY KEY (semester_id, pruefung_id)
);
