const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');


passport.use(new GoogleStrategy({
    // options for the googlestrategy
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect'
    }, (profile) =>{
        // passport callback function
        console.log('passport callback function started:');
        console.log(profile);
    })
);