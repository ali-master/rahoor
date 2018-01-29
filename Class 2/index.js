var express = require("express");
var airports = require("./json/airports.json");

var app = express();

app.get("/airports", function(req, res) {
	res.json(airports.slice(0, 10));
});

app.get("/airports/by/:lang/:country", function(req, res) {
	// first step
	// find country
	var country = airports.filter(function(airport, index) {
		return airport.country[req.params.lang] === req.params.country;
	});

	res.json(country);
});

app.get("/airports/by/continent/:continentName", function(req, res) {
	var continent = airports.filter(function(airport, index) {
		return airport.continent === req.params.continentName;
	});

	res.json(continent);
});

app.post("/airports", function(req, res) {
	res.json([{ name: "Ali" }]);
});

app.delete("/airports", function(req, res) {
	res.json([{ name: "Ali" }]);
});

app.listen(3000, function() {
	console.log("application is running here localhost:3000");
});
