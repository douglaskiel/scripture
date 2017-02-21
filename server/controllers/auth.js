var User = require('../models/user');

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
		// 4. Show response to user... indicating the user was created.
		res.json({success:true});
		});
	});
}

/* TODO - 


 */ 