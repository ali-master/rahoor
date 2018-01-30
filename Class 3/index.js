const express = require("express");
const trainStations = require("./iran-train-stations-list.json");

// Modules
const findByCode = require("./modules/code");
const findByRail = require("./modules/rail");
const findByDistance = require("./modules/distance");

const app = express();

app.get("/", function(request, response) {
	response.json(trainStations);
});

// Filter by station unique code
app.get("/station/code/:code", findByCode);

// Filter by station rail name
app.get("/station/rail/:rail", findByRail);

// Filter by station distance value
app.get("/station/distance/:type/:distance", findByDistance);

app.listen(3000, function() {
	console.log("Application is running here localhost:3000");
});
