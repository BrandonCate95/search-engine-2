var loki = require("lokijs");

var db = new loki('docs.json');

db.loadDatabase({}, function () {
    var docs = db.getCollection('docs')
    console.log(docs.data);
});