'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  crypto = require('crypto'),
	Schema = mongoose.Schema;

/**
 * Server Schema
 */
var ServerSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please enter Server name',
		trim: true
	},
	hostname: {
		type: String,
		default: '',
		required: 'Please enter Server hostname',
		trim: true
	},
	region: {
		type: String,
		default: '',
		required: 'Please enter region server is located',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Server', ServerSchema);
