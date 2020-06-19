const express = require('express');
const passport = require('passport');
const router = express.Router();
const Project = require('../models/project')



router.get('/', function(req, res ) {
  res.render('index', { title: 'Data Center Basics' , user: req.user });
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
  { successRedirect : '/login',
    failureRedirect : '/'
  }
));

router.get('/login', async function(req, res) {
  const project = await Project.findOne({owner: req.user._id})
  if(project) return res.redirect('/projects/show');
  res.redirect('/projects/new')
})


// finally route to log off the user
router.get('/logout', function(req,res){
  req.logOut();
  res.redirect('/');
});

module.exports = router;
