const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const Document = require('../Document')

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'test';

// Create a new MongoClient
const client = new MongoClient(url);

var docArray = {}

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  findDocuments(db, function(val) {
    console.log(val[0].title);
    console.log(val.length)

    for(var i = 0; i < val.length; i++){

      //need to speed up document creation process
      //or when uploaded create the document


      var document = new Document(val[0].content)
      docArray[document.docId] = document
      console.log(`added ${i}`)
    }
    
    client.close();




  });
});

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('docs');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    callback(docs);
  });
}