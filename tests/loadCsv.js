const csv = require('csv-parser');  
const fs = require('fs');

const DIR = "C:\\Users\\Brandon\\Downloads\\all-the-news\\"
const FILE_NM = "articles1.csv"

fs.createReadStream(DIR + FILE_NM)  
  .pipe(csv())
  .on('data', (row) => {
    console.log(row.content);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });