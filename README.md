# MyTasks API backend

This is a Node/Express backend for API calls for a todo/task app.

## Technologies used:

Node.js, Express.js, Mongo/Mongoose.

## Features

Express server.
Router for better route handling and cleaner code.
RESTful URLs and actions.
Mongoose Schema and Promise for models.
Helper functions to keep routes clean.



## Code Snippets

#### Router for clean routes
```
routes/todos.js


router.route('/')
  .get(helpers.getTodos)
  .post(helpers.createTodo)


router.route('/:todoId')
  .get(helpers.getTodo)
  .put(helpers.updateTodo)
  .delete(helpers.deleteTodo)

```
#### Helper functions for cleaner CRUD

```
helpers/todos.js

exports.getTodos = function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createTodo = function(req, res){
  db.Todo.create(req.body)
  .then(function(newTodo){
      res.status(201).json(newTodo);
  })
  .catch(function(err){
      res.send(err);
  })
}

exports.getTodo = function(req, res){
   db.Todo.findById(req.params.todoId)
   .then(function(foundTodo){
       res.json(foundTodo);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.updateTodo =  function(req, res){
   db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
   .then(function(todo){
       res.json(todo);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.deleteTodo = function(req, res){
   db.Todo.deleteOne({_id: req.params.todoId})
   .then(function(){
       res.json({message: 'Deleted it!'});
   })
   .catch(function(err){
       res.send(err);
   })
}

```
