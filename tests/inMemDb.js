var Document = require("../Document");
var loki = require("lokijs");
var randomWords = require('random-words');

var db = new loki('docs.json');

var docs = db.addCollection('docs')

const SIZE = 100000
for(let i = 0; i < SIZE; i++){
    doc = new Document( randomWords({ min: 5, max: 50, join: ' ' }) )
    docs.insert(doc.toJson())
}

db.saveDatabase()