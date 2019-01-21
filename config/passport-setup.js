const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/user-model');

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((user, done) => {
    user.findById(id).then((user) => {
    done(null, user.id);
    })
})
    
passport.use(new GoogleStrategy({
    // options for the googlestrategy
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: 'http://localhost:3000/auth/google/redirect'
    }, 
    
    (profile, done, err) =>{
        // check if user already exists in db
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if(currentUser){
                // already have the user
                console.log('User is: ', currentUser);
                return done(null, currentUser);
            } else {
                // if not, create new user in db
                new User({
                    username: profile.displayName,
                    googleId: profile.id
                }).save().then((newUser) => {
                    console.log('New user created: ' + newUser);
                    // callback to let passport we are done processing
                    return done(null, newUser);
                });
            }
        });
    })
);