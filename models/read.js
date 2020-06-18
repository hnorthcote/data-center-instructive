const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const environmentSchema = new Schema({
  name: {type: String},
  hardware: {type: [String]},
  software: {type: [String]},
  hardwareCost:{type :Number},
  softwareCost: {type :Number},
}, { timestamps: true });




module.exports =  mongoose.model("Environment", environmentSchema)


