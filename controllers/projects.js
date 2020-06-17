
const User = require('../models/user');

const Project = require('../models/project');
const Environment = require('../models/read');

module.exports = {
  show,
  new: newProject,
  create,
};


 function show(req, res) {

     Project.findOne({owner: req.user._id}).populate("environment").exec(function(err, project) {
       console.log(err);
      res.render('projects/show', {user: req.user, title: project.name, project }); 
     })

  } 





function newProject(req, res) {
  User.find({}, function(err, users) {
  res.render('projects/new', { 
    users,
    user: req.user, 
    title: 'New Project' });
})
};

async function create(req, res) {
  console.log(req.user);
  req.body.owner =req.user._id;
const environment = await Environment.findOne({name: req.body.environment})
req.body.environment = environment._id
  Project.create(req.body, function(err, project){
    if(err) {console.log(err); return res.render('projects/new', { 
      users,
      user: req.user, 
      title: 'New Project' });
  }
    console.log('created project!');res.redirect('/projects/new');})
  }
