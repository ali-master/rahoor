const trainStations = require("../iran-train-stations-list.json");

function findByRail(req, res) {
	const findStationsByRail = trainStations.filter(function(station, idnex) {
		return station.rail === req.params.rail;
	});

	if (findStationsByRail.length) {
		res.json(findStationsByRail);
	} else {
		res.status(404).send("not found");
	}
}

module.exports = findByRail;
