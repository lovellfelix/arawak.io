'use strict';

module.exports = function(app) {
	var huts = require('../controllers/huts.server.controller');
	var hutsPolicy = require('../policies/huts.server.policy');

	// Huts Routes
	app.route('/api/huts').all()
		.get(huts.list).all(hutsPolicy.isAllowed)
		.post(huts.create);

	app.route('/api/huts/:hutId').all(hutsPolicy.isAllowed)
		.get(huts.read)
		.put(huts.update)
		.delete(huts.delete);

	// Finish by binding the Hut middleware
	app.param('hutId', huts.hutByID);
};