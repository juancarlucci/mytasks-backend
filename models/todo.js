var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var todoSchema = new Schema({
  name: {
    type: String,
    required: 'Please add a task name'
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
