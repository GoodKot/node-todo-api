const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove();
Todo.findByIdAndRemove('59af72ede4d91acc2955ffdc').then((todo) => {
  console.log(todo);
});

Todo.findOneAndDelete({_id: '59af72ede4d91acc2955ffdc'}).then((todo) => {
  console.log(todo);
});