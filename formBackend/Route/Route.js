const express = require("express")
const route = express.Router()
const Registration = require("../models/registrationSchema")
const addressSchema = require("../models/address")

route.post('/submitForm', async (req, res) => {
    try {
      const formData = req.body;
      const newRegistration = new Registration(formData);
      await newRegistration.save();
      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  route.post('/saveAddress', async (req, res) => {
    try {
      const formData = req.body;
      const newRegistration = new addressSchema(formData);
      await newRegistration.save();
      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


  
  module.exports=route