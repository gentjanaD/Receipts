const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inputSchema = new Schema({
  positive: {type: Boolean, required: true},
  category: {type : String, required: true},
  title: {type : String, required: true},
  date: { type: String, required: true},
  person: String,
  location: String,
  whatHappened: String,
  howDidYouFeel: String,
  happenedBefore: String,
  doDifferently: String,
  share: String,
  learned: String,
  plan: String
});

mongoose.connect('mongodb://localhost:27017/inputSchema', {useNewUrlParser: true, useUnifiedTopology: true});

const Input = mongoose.model('inputSchema', inputSchema);

module.exports = Input;