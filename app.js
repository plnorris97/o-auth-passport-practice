const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');

const app = express();
app.use(passport.initialize());
// app.use(passport.session());

// set up view engine
app.set('view engine', 'ejs');

// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');
})

// set up routes 
app.use('/auth', authRoutes)

// create hoem route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => (
    console.log("App now listening on port 3000")
));
