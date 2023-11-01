const express = require('express');
const router = express.Router();
const passport = require('../config/passportAuth');
const { isAuthenticated } = require('../middlewares/isAuthenticated');


router.get('/', (req, res) => {
    // Check if the user is authenticated
    if (req.isAuthenticated()) {
      res.send(`Hello ${req.user.displayName}, welcome back!`);
    } else {
      res.send('Hello guest! <a href="/auth/google">Login with Google</a>');
    }
  });


  router.get('/home', isAuthenticated, (req, res) => {
    // Check if the user is authenticated
      res.send(`This is a protected route. : Hello ${req.user.displayName}, welcome back! full user : ${req.user}`);
  });

    // Route to initiate Google authentication login
    router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
  
    // Google login Callback route after successful authentication
    router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }),(req, res) => {
        // Redirect or handle the successful login
        res.redirect('/home');
      }
    );

module.exports = router;