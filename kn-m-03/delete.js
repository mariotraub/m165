// Einzelne id löschen
db.semester.deleteOne({"_id": semesterIds[0]})

// Mehrere ids löschen
db.pruefung.deleteMany({
	"$or": [
		{"_id": pruefungIds[1]},
		{"_id": pruefungIds[2]}
	]
})
