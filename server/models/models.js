const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inputSchema = new Schema({
  positive: {type: Boolean, required: true},
  eventTitle: {type : String, required: true},
  category: {type : String, required: true},
  date: { type: Date, default: Date.now() },
  person: String,
  location: String,
  whatHappened: String,
  howDidYouFeel: String,
  happenedBefore: Boolean,
  doDifferently: String,
  share: Boolean,
  learned: String,
  plan: String

});
mongoose.connect('mongodb://localhost:27017/inputSchema', {useNewUrlParser: true, useUnifiedTopology: true});

const Input = mongoose.model('inputSchema', inputSchema);

module.exports = Input;