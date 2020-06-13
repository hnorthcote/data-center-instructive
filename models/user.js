const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema({
    name:  {type: String},
    email: {type: String},
    GoogleID:{type: String},
    avatarURL:{type: String},
  },{timestamps: true
  });

  module.exports = mongoose.model('User', userSchema);