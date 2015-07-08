'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	path = require('path'),
	mongoose = require('mongoose'),
	Hut = mongoose.model('Hut'),
	errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a Hut
 */
exports.create = function(req, res) {
	var hut = new Hut(req.body);
	hut.user = req.user;

	hut.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(hut);
		}
	});
};

/**
 * Show the current Hut
 */
exports.read = function(req, res) {
	res.jsonp(req.hut);
};

/**
 * Update a Hut
 */
exports.update = function(req, res) {
	var hut = req.hut ;

	hut = _.extend(hut , req.body);

	hut.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(hut);
		}
	});
};

/**
 * Delete an Hut
 */
exports.delete = function(req, res) {
	var hut = req.hut ;

	hut.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(hut);
		}
	});
};

/**
 * List of Huts
 */
exports.list = function(req, res) { Hut.find().sort('-created').populate('user', 'displayName')
																															 .populate('server', 'hostname name').exec(function(err, huts) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(huts);
		}
	});
};

/**
 * Hut middleware
 */
exports.hutByID = function(req, res, next, id) { Hut.findById(id).populate('user', 'displayName')
																																 .populate('server', 'hostname name').exec(function(err, hut) {
		if (err) return next(err);
		if (! hut) return next(new Error('Failed to load Hut ' + id));
		req.hut = hut ;
		next();
	});
};
