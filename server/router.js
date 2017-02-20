module.exports = function(app){
	app.get('/', function(req, res, next){
		res.send("Hey Homey");
	});

	app.get('/signup', function(req, res, next){
		res.send("Hey folks, Thanks for singing up!");
	});
}