const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const express = require('express');
const googleAuth = require('../dal/google-auth.dal');
const router = express.Router();
const User = require('../dal/models/user.model');
require('dotenv').config();

let userProfile;
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
      userProfile = profile;
      return done(null, userProfile);
    }
  )
);

// request at /auth/google, when user click sign-up with google button transferring
// the request to google server, to show emails screen
router.get(
  '/',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// URL Must be same as 'Authorized redirect URIs' field of OAuth client, i.e: /auth/google/callback
router.get(
  '/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google/error' }),
  (req, res) => {
    res.redirect('/auth/google/success'); // Successful authentication, redirect success.
  }
);

router.get('/success', async (req, res) => {
  const { failure, success } = await googleAuth.registerWithGoogle(userProfile);
  if (failure) console.log('Google user already exist in DB..');
  else console.log('Registering new Google user..');

  const loggedone = await User.find({ email: userProfile.emails[0].value });
  // console.log("ID OF THE LOGGED ONE",loggedone)

  let presentone = ''; // Initialize presentone with an empty string by default

  if (loggedone.length > 0) { // Check if loggedone contains any documents
      presentone = loggedone[0]._id; // Set presentone to the _id of the first document if available
  }

  const users = await User.find({ email: { $ne: userProfile.emails[0].value } });
 
  const viewdata = {
    loguser: loggedone,
    usersdata: users,
    presentone
  }
  res.render('success', viewdata);
});




router.get('/error', (req, res) => res.send('Error logging in via Google..'));

router.get('/signout', (req, res) => {
  try {
    req.session.destroy(function (err) {
      console.log('session destroyed.');
    });
    res.render('auth');
  } catch (err) {
    res.status(400).send({ message: 'Failed to sign out user' });
  }
});

module.exports = router;
