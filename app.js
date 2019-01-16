const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');

const app = express();
// const ejs = require('ejs');

// set up view engine
app.set('view engine', 'ejs');

// set up routes 
app.use('/auth', authRoutes)

// create hoem route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => (
    console.log("App now listening on port 3000")
));
