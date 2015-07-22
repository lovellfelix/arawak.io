'use strict';

var StripeWebhook = require('stripe-webhook-middleware'),
		appRoot = require('app-root-path'),
		config = require(appRoot + '/config/config'),
	  stripeEvents = require(appRoot + '/config/lib/stripe-events');

var stripeWebhook = new StripeWebhook({
  stripeApiKey: config.stripeOptions.apiKey,
  respond: true
});


module.exports = function(app) {
	var users = require('../controllers/users.server.controller');

	// Routing logic
	// ...
	//app.route('/api/users/me').get(users.me);

// 	app.post('/user/billing',
// 	isAuthenticated,
// 	users.postBilling);
// app.post('/user/plan'
// 	users.postPlan);

app.route('/api/users/billing').get(users.postBilling);


	// use this url to receive stripe webhook events
	app.post('/stripe/events',
		stripeWebhook.middleware,
		stripeEvents
	);

};
