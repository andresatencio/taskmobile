
module.exports = function ( app ) {


	// Rutas
	app.get('/', function (req, res) {
		res.render('admin')
	})

	app.get('/admin', function (req, res) {
		if (req.user) { 
			console.log(req.user)
  			return res.send("Te logueaste " + req.user);
  		} else {
  			return res.redirect('/');
  		}
	})


	app.get('/auth/twitter', app.passport.authenticate('twitter'));

	app.get('/auth/twitter/callback', 
	  app.passport.authenticate('twitter', { successRedirect: '/admin',
	                                     failureRedirect: '/' }));

}
