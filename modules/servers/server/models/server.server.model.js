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
	username: {
		type: String,
		default: '',
		required: 'Please enter username',
		trim: true
	},
	password: {
		type: String,
		default: '',
		required: 'Please enter username',
		trim: true
	},
	salt: {
		type: String
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

/**
 * Hook a pre save method to hash the password
 */
ServerSchema.pre('save', function(next) {
	if (this.password) {
		this.salt = crypto.randomBytes(16).toString('base64');
		this.password = this.hashPassword(this.password);
	}

	next();
});

/**
 * Create instance method for hashing a password
 */
ServerSchema.methods.hashPassword = function(password) {
	if (this.salt && password) {
		return crypto.pbkdf2Sync(password, new Buffer(this.salt, 'base64'), 10000, 64).toString('base64');
	} else {
		return password;
	}
};


mongoose.model('Server', ServerSchema);
