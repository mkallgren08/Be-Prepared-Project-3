//Configuring model/schema for user collection
const mongoose = require('mongoose');

//Define the schema
const schema = new mongoose.Schema({
  username: 'String',
  password: 'String',
  name: 'String',
  address: 'String',
  city: 'String',
  state: 'String',
  zipcode: 'Number',
  phone: 'String',
  position: {
    lat: 'Number',
    lng: 'Number'
  },
  safe: "Boolean",
  needs: {
    category: 'String',
    specifics: 'String'
  }


});

//module.exports = mongoose.model('User', schema);


