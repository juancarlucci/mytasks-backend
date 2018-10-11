var mongoose = require("mongoose");
mongoose.set('degug', true);
mongoose.connect('mongodb://localhost/tasks-api');

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
