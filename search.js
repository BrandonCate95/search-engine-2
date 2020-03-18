var Document = require("./Document")
var Index = require("./Index")
var snowball = require('node-snowball');
const csv = require('csv-parser');  
const fs = require('fs');

const DIR = "C:\\Users\\Brandon\\Downloads\\all-the-news\\"
const FILE_NM = "articles-custom.csv"

var i = 0
const docArray = {}
var index = new Index()

fs.createReadStream(DIR + FILE_NM)  
  .pipe(csv())
  .on('data', (row) => {
    var document = new Document(row.content)
    docArray[document.docId] = document
    console.log(`title: ${row.title}`)
    console.log(`added: ${++i}`)
  })
  .on('end', () => {
    console.log('CSV file successfully processed');

    var j = 0
    //creates index from doc set
    Object.keys(docArray).forEach(function(key) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object 
        console.log(`adding to index: ${++j}`)
        index.addDocument(docArray[key].docId,docArray[key].tokenStemTextArray)
    })

    console.log(Date.now())
    var arr = search('she')
    console.log(Date.now())
    console.log(arr.length)
  });

// const data = [
//     "new home sales top forecasts",
//     "home sales rise in july",
//     "increase in home sales in july",
//     "july new home sales rise"
// ]

//creates useable doc set
// data.forEach((doc,i) => {
//     var document = new Document(doc)
//     docArray[document.docId] = document
// })

function search(word){
    var docs = index.index[snowball.stemword(word)]

    console.log(`searching for: ${word}`)

    if(docs){
        return docs.arr
        // docs.arr.forEach((docId) => {
        //     console.log(docArray[docId].originalText)
        // })
    }
}

function score(document){
    
}

class posting {
    constructor(stem){
        this.stem = stem // root stem word
        this.postingsList = [] // 
    }
}