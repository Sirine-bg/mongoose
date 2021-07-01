const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
  },
  favoriteFoods: {
    type :[String]
  }
});
module.exports = person = mongoose.model('person', personSchema);