var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/voter_list';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
      
      
    //INSERT CODE HERE
        
        
    // CODE ENDS HERE
      
      
  }
});
