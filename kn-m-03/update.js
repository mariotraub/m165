db.berufsbildner.updateOne(
	{
		"_id": berufsbildnerIds[0]
	},
	{
		"$set": {"name": "Stefan"}
	}
)

db.pruefung.updateMany(
	{
		"$or": [
			{"name": "Franzoesisch"},
			{"name": "Biologie"}
		]
	},
	{
		"$set": {
			"gewichtung": 2
		}
	}
)

db.semester.replaceOne(
	{
		"_id": semesterIds[0]
	},
	{
		"_id": semesterIds[0],
		"startDatum": new Date("2025-01-01"),
		"endDatum": new Date("2025-07-01")
	}
)
