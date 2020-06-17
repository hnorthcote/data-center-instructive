const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: { type: String, required: true },
    user: { type: String}, 
    creation: {type: Date, required:true},
  }, {
    timestamps: true
  });

const projectSchema = new Schema({
  name: {type: String, required: true},
  company:{type: String, required: true, default: "self"},
  deadline:{type: Date, required: true},
  userCount: {type: Number, required:true, min:10, max: 20000},
  environment: {type: Schema.Types.ObjectId, ref:"environment", required:true}, 
  owner: {type: Schema.Types.ObjectId, ref: "user" },
  comments: [commentSchema],
}, { timestamps: true });





module.exports = mongoose.model('Project', projectSchema);