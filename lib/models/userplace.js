/**
 * Created by pvty on 4/10/14.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Thing Schema
 */
var UserPlace = new Schema({
    userId: String,
    placeId: String
});
module.exports = mongoose.model('UserPlace', UserPlace);