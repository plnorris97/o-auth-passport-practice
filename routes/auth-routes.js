const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req,res) => {
    res.render('login')
})

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('logging out');
})

// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'),  (err, req, res) => {
    if (err.name === 'TokenError') {
        res.redirect('/auth/google');
    } else {
        // handle other errors here
    }
    },
    (req, res) => {
        req.user
    // on success, redirect back to '/'
    res.redirect('/');
    res.send('you reached the redirect URI');
});

module.exports = router;