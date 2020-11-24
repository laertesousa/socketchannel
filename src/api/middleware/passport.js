const OAuth2Strategy = require('passport-oauth2');
const passport = require('passport');
const { Room } = require('../components/rooms/models');
const ClientJWTBearerStrategy = require('passport-oauth2-jwt-bearer').Strategy;

const setupPassport = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new ClientJWTBearerStrategy(
        (accessToken, done) => {
        Room.findOne({ accessToken }, (err, client) => {
            if (err) { return done(err); }
            if (!client) { return done(null, false); }
            return done(null, client);
        });
        }
    ));
}

module.exports = setupPassport;