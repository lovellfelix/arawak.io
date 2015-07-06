'use strict';

module.exports = function(app) {
	var servers = require('../controllers/servers.server.controller');
	var serversPolicy = require('../policies/servers.server.policy');

	// Servers Routes
	app.route('/api/servers').all()
		.get(servers.list).all(serversPolicy.isAllowed)
		.post(servers.create);

	app.route('/api/servers/:serverId').all(serversPolicy.isAllowed)
		.get(servers.read)
		.put(servers.update)
		.delete(servers.delete);

	// Finish by binding the Server middleware
	app.param('serverId', servers.serverByID);
};