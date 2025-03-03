db.berufsbildner.find(
	{
		"lernende.lehrstart": {"$lt": new Date("2024-01-01")}
	},
	{
		"_id": 0,
		"lernende._id": 0
	}
)

db.semester.find({
	"$or": [
		{"startDatum": new Date("2024-01-01")},
		{"endDatum": new Date("2025-01-01")}
	]
})

db.pruefung.find({
	"$and": [
		{"name": {"$regex": ".*a.*"}},
		{"gewichtung": {"$lt": 1.2}}
	]
})
