console.log('QUESTIONS MODEL IS HERE');
var mongoose = require('mongoose')
, Related = mongoose.Schema
// build your friend schema and add it to the mongoose.models
var NewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String},
  answers: [{type: Related.Types.ObjectId, ref: 'Answer'}],


})
// register the schema as a model
var Question = mongoose.model('Question', NewSchema);
