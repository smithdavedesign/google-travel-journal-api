// auth.js
require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/auth/google/callback', // Update with your redirect URI
    },
    (accessToken, refreshToken, profile, done) => {
      // Store user information in your database or session
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  // Serialize user data (e.g., store user ID in session)
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  // Deserialize user (e.g., retrieve user details from database using stored ID)
  done(null, obj);
});


module.exports =  passport;