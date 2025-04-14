UPDATE lernende_by_berufsbildner 
SET lernender_name = 'Ulrike' 
WHERE berufsbildner_id = 5d9dc2e9-07b3-4e6c-8c39-62e9d708fd7a AND lernender_id = 0fdb104a-72e7-48dc-b77a-a893aa035027;

UPDATE pruefungen_by_semester
SET pruefung_date = CURRENT_DATE()
WHERE semester_id = 7deb9e04-3ca5-4772-8e1b-313e1af0748b AND pruefung_id = 2933726d-a9c3-40f7-a337-50a2e36ca905;

UPDATE pruefungen_by_lernender
SET pruefung_note = 5.0
WHERE lernender_id = 7028f27d-fc48-416c-bde0-cb233653cb60 
AND pruefung_id IN (27c5b537-cef4-49cb-ba76-44ac976977b6, 77ffd709-26e6-41d5-ae99-e1c878a70102, da4b0c0d-ed81-4470-84af-3d424e176568);
