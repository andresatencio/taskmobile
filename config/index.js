var path = require('path');

module.exports = function ( app, express ) {

	app.configure(function(){
		app.set('port', process.env.PORT || 3000);
		app.set('views', __dirname + './../views');
		app.set('view engine', 'ejs');
		app.use(express.favicon());
		app.use(express.logger('dev'));
		app.use(express.bodyParser());
		app.use(express.methodOverride());
		app.use(express.cookieParser('your secret here'));
		app.use(express.session());
		app.use(app.passport.initialize());
  		app.use(app.passport.session());
		app.use(app.router);
		app.use(express.static(path.join(__dirname, './../public')));
	});

}