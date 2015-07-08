'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Hut Schema
 */
var HutSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill hostname',
		trim: true
	},
	product: {
		type: String,
		default: '',
	},
	created: {
		type: Date,
		default: Date.now
	},
	server: {
		type: Schema.ObjectId,
		ref: 'Server'
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Hut', HutSchema);
