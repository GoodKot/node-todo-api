const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID;
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

 db.collection('todos').findOneAndUpdate({
   _id: new ObjectID('59ab85fa9f426676d4696a75')
 }, {
   $set: {
     completed: true
   }
 }, {
   returnOriginal: false
 }).then((res) => {
   console.log(JSON.stringify(res, undefined, 2));
 });


  db.collection('users').findOneAndUpdate({
    _id: new ObjectID('59abae239f426676d46971b5')
  }, {
    $set: {
      name: 'Mike'
    },
    $inc: {
      age: -76
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
  });

  // db.close();
});