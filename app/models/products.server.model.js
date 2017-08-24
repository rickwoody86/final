'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	validation = require('./validation.server.model');

/**
 * Product Schema
 */
var ProductSchema = new Schema({
	category: { 
		type: Schema.Types.ObjectId,
		ref: 'Category'
		//, required: 'invalid category' // TODO: make tests pass valid category
	},
	created: {
		type: Date,
		default: Date.now
	},
	name: {
		type: String,
		default: '',
		trim: true, 	
		required: 'name cannot be blank',
		validate: [validation.len(40), 'name must be 40 chars in length or less']
	},
	description: {
		type: String,
		default: '',
		trim: true, 	
		required: 'name cannot be blank',
		validate: [validation.len(140), 'description must be 140 chars in length or less']
	},
	unitPrice: {
		type: Number,
		default: 0
	},
	unitsInStock: {
		type: Number,
		default: 0,
		min: 0
	},
	unitsOnOrder: {
		type: Number,
		default: 0,
		min: 0
	},
	discontinued: {
		type: Boolean,
		default: false
	},
	image: {
		type: String,
		default: 0,
		min: 0
	}
});

mongoose.model('Product', ProductSchema);