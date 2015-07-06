'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	path = require('path'),
	mongoose = require('mongoose'),
	Server = mongoose.model('Server'),
	errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a Server
 */
exports.create = function(req, res) {
	var server = new Server(req.body);
	server.user = req.user;

	server.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(server);
		}
	});
};

/**
 * Show the current Server
 */
exports.read = function(req, res) {
	res.jsonp(req.server);
};

/**
 * Update a Server
 */
exports.update = function(req, res) {
	var server = req.server ;

	server = _.extend(server , req.body);

	server.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(server);
		}
	});
};

/**
 * Delete an Server
 */
exports.delete = function(req, res) {
	var server = req.server ;

	server.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(server);
		}
	});
};

/**
 * List of Servers
 */
exports.list = function(req, res) { Server.find().sort('-created').populate('user', 'displayName').exec(function(err, servers) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(servers);
		}
	});
};

/**
 * Server middleware
 */
exports.serverByID = function(req, res, next, id) { Server.findById(id).populate('user', 'displayName').exec(function(err, server) {
		if (err) return next(err);
		if (! server) return next(new Error('Failed to load Server ' + id));
		req.server = server ;
		next();
	});
};
