const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scaleSchema = new Schema({
  name: { type: String},
  level: {type: Number},
  userCount:{type: Number, min: 10, max:10000},
},{timestamps: true
});

const softwareSchema = new Schema({
  name: {type: String},
  scope: [scaleSchema],
  cost: {type :Number}
}, { timestamps: true });

const hardwareSchema = new Schema({
  name: { type: String },
  scale: { type: String, default: "small" }, 
  type: {type: String, default: "server"},
  load: {type: Number}
}, {
  timestamps: true
});


const marketSchema = new Schema({
  name: { type: String },
  softwareList: {type: [String]}, 
}, {
  timestamps: true
});



module.exports = {
  software : mongoose.model('Software', softwareSchema),
  hardware : mongoose.model('Hardware', hardwareSchema),
  scale: mongoose.model('Scale', scaleSchema),
  market : mongoose.model('Market', marketSchema),
}