var Document = require("./Document")
var RedisClient = require('../redis-client/RedisClient')
const csv = require('csv-parser');  
const fs = require('fs');

const DIR = "C:\\Users\\Brandon\\Downloads\\all-the-news\\"
const FILE_NM = "articles-custom.csv"

var i = 0

async function test(){
    var client = new RedisClient()
    await client.generateClient()
    
    fs.createReadStream(DIR + FILE_NM)  
        .pipe(csv())
        .on('data', (row) => {
            var document = new Document(row.content)
            docArray[document.docId] = document
            console.log(`added: ${++i}`)
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
        });

}

test()

