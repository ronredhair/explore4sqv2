/**
 * Created by pvty on 4/10/14.
 */


'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('UserPlace'),
    passport = require('passport');

/**
 * Create user
 */
/*
exports.addUserPlace = function (req, res, next) {
    var newUser = new User(req.body);
    newUser.provider = 'local';
    newUser.save(function(err) {
        if (err) return res.json(400, err);

        req.logIn(newUser, function(err) {
            if (err) return next(err);

            return res.json(req.user.userInfo);
        });
    });
};
*/
/**
 *  Get profile of specified user
 */
exports.getUserPlaces = function (req, res, next) {
    var userId = req.params.id;

    User.findById(userId, function (err, user) {
        if (err) return next(err);
        if (!user) return res.send(401);

        res.send({ profile: user.profile });
    });
};

/**