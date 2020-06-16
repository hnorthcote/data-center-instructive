const Project = require('../models/project');
const User = require('../models/user');
const { hardware } = require('../models/read');
const Software = require('../models/read').software;
const Hardware = require('../models/read').hardware;
const Market = require('../models/read').market;


module.exports = {
  show,
  new: newProject,
  create,
};

let marketSelected;
let marketSoftware = [];
let marketHardware = [];

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
  console.log(req.user);
  req.body.owner =req.user._id;  
  marketSelected = req.body.market;
  setSoftware(); setHardware();
  req.body.software = marketSoftware;
  req.body.hardware = marketHardware;
  Project.create(req.body, function(err, project){
    if(err) {console.log(err); return res.render('projects/new')}
    res.redirect('/');})
  }

 function setSoftware() {
  Market.find({marketSelected}, function(err, market){
    marketSoftware = market.softwareList;})}

  function setHardware() {
    markeSoftware.forEach(function(hardware){
      let setScale = hardware.scope;
      Hardware.find({type:"server", scale: setScale}, function(err, hdw) {
        if (err) {console.log(err);}
      marketHardware.push(hdw);
    })
  })}
//first find the software in the software list by itirating
//then search for each software name and get the "scope" value
//grab the scope value and search for the server "scale" of the same value
//store the server "name" value on the setHardware array
//store the hardware array and software array on the project software and hardware schema keys