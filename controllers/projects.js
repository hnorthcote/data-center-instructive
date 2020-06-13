const Project = require('../models/project');
const User = require('../models/user');

module.exports = {
  show,
  new: newProject,
};


function show(req, res) {
  Project.findById(req.params.id, function(err, project) {
    res.render('projects/show', { title: 'Project recommendations', project });
  });
}



function newProject(req, res, next) {
  User.find({}, function(err, users) {
  res.render('projects/new', { 
    users,
    user: req.user, 
    title: 'New Project' });
})
};



