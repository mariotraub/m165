var lernenderIds = [ObjectId(), ObjectId(), ObjectId()]
var berufsbildnerIds = [ObjectId(), ObjectId(), ObjectId()]
var pruefungIds = [ObjectId(), ObjectId(), ObjectId(), ObjectId(), ObjectId()]

db.lernender.insertMany([
	{
		"_id": lernenderIds[0],
		"name": "Mario",
		"lehrstart": new Date("2023-07-01"),
		"berufsbildner": {
			"name": "Christoph"
		}
	},
	{
		"_id": lernenderIds[1],
		"name": "Stefan",
		"lehrstart": new Date("2023-07-01"),
		"berufsbildner": {
			"name": "Brigitte"
		}
	},
	{
		"_id": lernenderIds[2],
		"name": "Elisabeth",
		"lehrstart": new Date("2023-07-01"),
		"berufsbildner": {
			"name": "Brigitte"
		}
	}
]);

db.pruefung.insertMany([
	{
		"_id": pruefungIds[0],
		"note": 5.3,
		"gewichtung": 1.0,
		"name": "Französisch 1",
		"datum": new Date("2025-02-24"),
		"lernender": lernenderIds[0],
		"semester": {
			"startDatum": new Date("2025-01-01"),
			"endDatum": new Date("2025-07-31")
		}
	}
])
