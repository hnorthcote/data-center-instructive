const User = require('../models/user');

module.exports = {
  index
};


function index(req, res, next) {
  User.find({}, function(err, users) {
   res.render('users/index', {
    users,
    user: req.user
    });
 })};
