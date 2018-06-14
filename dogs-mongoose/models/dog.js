const mongoose = require('mongoose');
const { Owner } = require('./Owner');

//schema
const dogSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: Number,
  sex: String,
  isCute: Boolean,
  isEvil: Boolean,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Owner'
  }
});

dogSchema.post('update', function(err, dog) {
  Owner.upate(dog._id, { $addToSet: { dogs: dog._id } });
});

//name of schema and our class that we made
//this will turn into db.dogs
module.exports = mongoose.model('Dog', dogSchema);
//mongoose uses the schema to build a model
