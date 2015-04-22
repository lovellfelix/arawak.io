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
	hostname: {
		type: String,
		default: '',
		required: 'Please fill hostname',
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

mongoose.model('Hut', HutSchema);
