const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID;
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });


  // db.collection('users').deleteOne({name: 'Mike'}).then((result) => {
  //   console.log(result);
  // });
  // db.collection('users').deleteOne({name: 'Sedra'}).then((result) => {
  //   console.log(result);
  // });
  // db.collection('users').deleteOne({name: 'Cat'}).then((result) => {
  //   console.log(result);
  // });
  db.collection('users').findOneAndDelete({
    _id: new ObjectID("59a81e6d1f10681868255be9")
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});