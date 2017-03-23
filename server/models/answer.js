console.log('ANSWERS MODEL IS HERE');
var mongoose = require('mongoose')
, Related = mongoose.Schema;
// build your friend schema and add it to the mongoose.models
var NewSchema = new mongoose.Schema({
  name:{ type: String, required: true },
  description: { type: String},
  username: {type: String},
  likes: {type: Number},
  _question: {type: Related.Types.ObjectId, ref: 'Question'},

})
// register the schema as a model
var Answer = mongoose.model('Answer', NewSchema);
