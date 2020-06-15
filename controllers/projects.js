const Project = require('../models/project');
const User = require('../models/user');

module.exports = {
  show,
  new: newProject,
  create,
};


function show(req, res) {
  Project.findById(req.params.id, function(err, project) {
    res.render('projects/show', { title: project.name, project });
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

function create(req, res) {
  Project.create(req.body, function(err, project){
    if(err) {console.log(err);}

  })
}



