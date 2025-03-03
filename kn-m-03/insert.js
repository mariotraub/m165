var lernenderIds = [ObjectId(), ObjectId(), ObjectId()]
var berufsbildnerIds = [ObjectId(), ObjectId()]
var pruefungIds = [ObjectId(), ObjectId(), ObjectId(), ObjectId(), ObjectId()]
var semesterIds = [ObjectId(), ObjectId()]


db.semester.insertOne({
	"_id": semesterIds[0],
	"startDatum": new Date("2024-01-01"),
	"endDatum": new Date("2024-07-01")
})

db.semester.insertOne({
	"_id": semesterIds[1],
	"startDatum": new Date("2024-07-01"),
	"endDatum": new Date("2025-01-01")
})

db.berufsbildner.insertMany([
	{
		"_id": berufsbildnerIds[0],
		"name": "Brigitte",
		"lernende": [
			{
				"_id": lernenderIds[0],
				"name": "Mario",
				"lehrstart": new Date("2023-08-01")
			}
		]
	},
	{
		"_id": berufsbildnerIds[1],
		"name": "Hans",
		"lernende": [
			{
				"_id": lernenderIds[1],
				"name": "Thomas",
				"lehrstart": new Date("2023-08-01")
			},
			{
				"_id": lernenderIds[2],
				"name": "Christina",
				"lehrstart": new Date("2023-08-01")
			}
		]
	}
])

db.pruefung.insertMany([
	{
		"_id": pruefungIds[0],
		"name": "Franzoesisch",
		"datum": new Date("2024-05-04"),
		"gewichtung": 1.0,
		"semester": semesterIds[0],
		"noten": [
			{
				"note": 5.4,
				"lernender": lernenderIds[0]
			},
			{
				"note": 4.5,
				"lernender": lernenderIds[1]
			}
		]
	},
	{
		"_id": pruefungIds[1],
		"name": "Mathematik",
		"datum": new Date("2024-06-12"),
		"gewichtung": 1.5,
		"semester": semesterIds[0],
		"noten": [
			{
				"note": 4.8,
				"lernender": lernenderIds[0]
			},
			{
				"note": 3.9,
				"lernender": lernenderIds[1]
			},
			{
				"note": 5.2,
				"lernender": lernenderIds[2]
			}
		]
	},
	{
		"_id": pruefungIds[2],
		"name": "Biologie",
		"datum": new Date("2024-09-20"),
		"gewichtung": 1.2,
		"semester": semesterIds[1],
		"noten": [
			{
				"note": 5.0,
				"lernender": lernenderIds[2]
			},
			{
				"note": 4.2,
				"lernender": lernenderIds[1]
			}
		]
	}
])
