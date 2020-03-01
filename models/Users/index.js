var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var User = new Schema({
    name: String,
    email: String,
    password: String,
    phone_number: String,
    isactive: Boolean,
    profile_type: String
  });


  // Compile model from schema
var UserModel = mongoose.model('UserModel', User );