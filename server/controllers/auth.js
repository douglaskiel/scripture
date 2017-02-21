var User = require('../models/user');
var jwt = require('jwt-simple');
var config = require('../config');

function createUserToken(user){
	var timestamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
}

exports.signup = function(req, res, next){
	// Test
	// res.send("authorization is happening, yo");
	// 1. take request, get and store
	var email = req.body.email;
	var password = req.body.password;

	if ( !email || !password) {
		return res.status(418).send({error: 'You must probide email and pw.'});
	}
	// 2. Check if user email exist/"query of existance"
	User.findOne({ email: email }, function(err, existingUser){
		if(err) {
			return next(err);
		}// handle search error

		if(existingUser){
			// return res.status(418).send(err);
		// alternative: 
		return res.status(418).send("Email is in use");

		}// handles existing users
	

		// 3. Create new user if email does not exist
		var user = new User({
			email: email,
			password: password
		});

		// To save the record to the DB.
		user.save(function(err){
			if(err) { return next(err); }
			// this is the json web token to help security of the userName
			res.json({ token: createUserToken(user)});
		// 4. Show response to user... indicating the user was created.
		res.json({success:true});
		});
	});
}

/* TODO - 


 */ 