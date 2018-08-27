const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const TodoSchema = new Schema({
  name : {
    type: String,
    required: true
  },
  priority : {
    type: String,
    required: true
  },
  date : {
    type: String,
    required: true
  }
});

module.exports = Todo = mongoose.model('todo', TodoSchema);
