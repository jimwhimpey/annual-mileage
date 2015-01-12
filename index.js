// ===============================================
// Requirements
// ===============================================

	var express = require('express'),
		app = express(),
		sass = require('node-sass'),
		handlebars = require('express-hbs'),
		https = require('https'),
		querystring = require('querystring'),
		moment = require('moment'),
		cookieParser = require('cookie-parser');


// ===============================================
// Setup handlebars and SASS
// ===============================================

	app.engine('hbs', handlebars.express3({
		partialsDir: __dirname + '/views/partials',
		layoutsDir: __dirname + '/views/layouts',
		defaultLayout: __dirname + '/views/layouts/default.hbs'
	}));

	app.set('view engine', 'hbs');
	app.set('views', __dirname + '/views');
	
	sass.renderSync({
		file: __dirname + '/styles/desktop.scss',
		outFile: __dirname + '/public/desktop.css',
		outputStyle: 'compressed'
	});

	app.use(express.static(__dirname + '/public'));
	
	// Cookies!
	app.use(cookieParser('annualmileage'));


// ===============================================
// Routes
// ===============================================

	app.get('/', function(req, pageResponse) {
		
		// Check if we have a cookie holding the auth token
		if (req.cookies.annualMileageToken) {
			
			// Get this user's list of activities from the start of the year
			var activityRequest = https.get({
				host: 'www.strava.com',
				port: 443,
				path: '/api/v3/athlete/activities?after=' + moment(moment().year() + "-01-01").format("X"),
				headers: {
					Authorization: 'Bearer ' + req.cookies.annualMileageToken
				}
			}, function(activityResponse) {
				
				var data = "";

				activityResponse.on('data', function (chunk) {
					data += chunk;
				});
				
				activityResponse.on('end', function () {
					console.log("=============================");
					console.log(JSON.parse(data));
					pageResponse.render('mileage', {
						name: "harry"
					});
				});

			});
			
		} else {
			// No cookie, homepage with a connect to Strava link
			pageResponse.render('home', {});
		}
		
	});
	
	app.get('/token_exchange', function(req, res) {
		
		// Setup data to pass
		var postData = querystring.stringify({
			client_id: '1417',
			client_secret: '31f4b47f603ee7edddae2a88c00d166f401b4ee4',
			code: req.query.code
		});

		// Setup the request
		var tokenRequest = https.request({
			hostname: 'www.strava.com',
			port: 443,
			path: '/oauth/token',
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Content-Length': postData.length
			}
		}, function(tokenResponse) {
			
			tokenResponse.on('data', function(data) {
				// Remember the access token on the cookie
				res.cookie('annualMileageToken', JSON.parse(data).access_token);
				// Redirect to the homepage
				res.redirect('/');
			});
			
		});
		
		// Post the data
		tokenRequest.write(postData);
		tokenRequest.end();

	});


// ===============================================
// Just a HTTP server
// ===============================================

	var server = app.listen(3000, function () {
		console.log('Example app listening at http://%s:%s', server.address().address, server.address().port);
	});