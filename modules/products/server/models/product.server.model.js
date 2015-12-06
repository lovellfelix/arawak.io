'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Product Schema
 */
var ProductSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Product name',
    trim: true
  },
  version: {
    type: String,
    default: '',
    required: 'Please fill Product version',
    trim: true
  },
  description: {
    type: String,
    default: '',
  },
  repository: {
    type: String,
    default: '',
    required: 'Please fill Product repository url',
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

mongoose.model('Product', ProductSchema);
