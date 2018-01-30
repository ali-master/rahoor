const trainStations = require("../iran-train-stations-list.json");

function findByDistance(req, res) {
	if (req.params.type != "gt" && req.params.type != "lt" && req.params.type != "eq") {
		res.status(403).send("Bad parameters");

		return;
	}

	const findStationsByDistance = trainStations.filter(function(station, idnex) {
		if (req.params.type === "gt") {
			return station.distance > req.params.distance;
		} else if (req.params.type === "lt") {
			return station.distance < req.params.distance;
		} else {
			return station.distance == req.params.distance;
		}
	});

	if (findStationsByDistance.length) {
		res.json(findStationsByDistance);
	} else {
		res.status(404).send("not found");
	}
}

module.exports = findByDistance;
