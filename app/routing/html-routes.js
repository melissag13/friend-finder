// Dependencies
var path = require('path');

// Routing
module.exports = function(app){
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});

	// If no match route is found, go home
	app.use("/", function(req, res){
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

}