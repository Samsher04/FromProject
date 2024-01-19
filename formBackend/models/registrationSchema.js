const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    fullName: String,
    dob: String,
    gender: String,
    mobileNumber: String,
    govIdType: String,
    govIdNumber: String,
  });
  
  module.exports = mongoose.model('Registration', registrationSchema);