const express = require('express');
const passport = require('passport');
const router = express.Router();
const projectsCtrl = require('../controllers/projects')



router.get('/', function(req, res, next ) {
  res.render('index', { title: 'Data Center Instructive' , user: req.user });
});
//google oauth routes
//first to start the authentication on the google side and indicate what to grab (profile and email)
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email']}
));

// second to choose where to send the data grabbed from google
router.get('/oauth2callback', passport.authenticate(
  'google',
  { successRedirect :'projects/new',
    failureRedirect : '/'
  }
));
// finally route to log off the user
router.get('/logout', function(req,res){
  req.logOut();
  res.redirect('/');
});

module.exports = router;
