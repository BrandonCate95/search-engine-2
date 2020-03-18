var Document = require("../Document");
var loki = require("lokijs");
var randomWords = require('random-words');

var db = new loki('docs.json');
var docs = null;

db.loadDatabase({}, function () {
    docs = db.getCollection('docs').data

    var index = new Set();
    for(let i = 0; i < docs.length; i++){
        for(let j = 0; j < docs[i].tokenStemTextArray.length; j++){
            index.add( docs[i].tokenStemTextArray[j] );
        }
    }

    console.log(index)
    console.log(index.size)
});

