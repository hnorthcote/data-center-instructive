const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scaleSchema = new Schema({
  name: { type: String, required: true},
  level: {type: Number},
  userCount:{type: Number, min: 10, max:10000, required: true},
},{timestamps: true
});

const softwareSchema = new Schema({
  name: {type: String, required: true},
  scope: [scaleSchema],
  cost: {type :Number}
}, { timestamps: true });

const hardwareSchema = new Schema({
  name: { type: String, required: true },
  scale: { type: String, default: "small", required:true }, 
  type: {type: String, default: "server", required:true},
  load: {type: Number}
}, {
  timestamps: true
});


const marketSchema = new Schema({
  name: { type: String, required: true },
  softwareList: {type: [String], required: true}, 
}, {
  timestamps: true
});



module.exports = {
  software : mongoose.model('Software', softwareSchema),
  hardware : mongoose.model('Hardware', hardwareSchema),
  scale: mongoose.model('Scale', scaleSchema),
  market : mongoose.model('Market', marketSchema),
}