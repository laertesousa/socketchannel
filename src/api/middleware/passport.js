const passport = require('passport');
const { Authentication } = require('../components/auth/models');
const LocalStrategy = require('passport-local');
const jwt = require ('jsonwebtoken')

const verifyToken = (appId, password, userToken) => { 
    const token = jwt.sign({ clientId: appId }, password);
    return true;
};

const setupPassport = (app) => {

    passport.use(new LocalStrategy(
        function(appId, password, done) {
            Authentication.findOne({ appId: appId }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!verifyToken(user.appId, password, user.token,)) { return done(null, false); }
            return done(null, user);
        });
        }
    ));

    app.use(passport.initialize());
    app.use(passport.session());
}

module.exports = setupPassport;