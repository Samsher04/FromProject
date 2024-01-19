const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    address: String,
    state: String,
    city: String,
    country: String,
    pincode: String,
  });
  
  module.exports = mongoose.model('address', addressSchema);