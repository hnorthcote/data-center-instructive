
const User = require('../models/user');

const Project = require('../models/project');
const Environment = require('../models/read');

module.exports = {
  create,
  delete: deleteComment,
};


async function create(req, res) {
    const project = await Project.findById(req.params.id);
    req.body.creation = Date.now();
    project.comments.push(req.body);
    await project.save();
    res.redirect(`/projects/show`);
    };

    
async function deleteComment(req, res) {
    console.log(req.params);
    const project = await Project.findOne({"comments._id":req.params.id});
    project.comments.pull(req.params.id)
    await project.save();
    res.redirect(`/projects/show`);
}

