const trainStations = require("../iran-train-stations-list.json");

function findByCode(req, res) {
	const findStation = trainStations.filter(function(station, idnex) {
		return station.code === parseInt(req.params.code, 10);
	});

	if (findStation.length) {
		res.json(findStation);
	} else {
		res.status(404).send("not found");
	}
}

module.exports = findByCode;
