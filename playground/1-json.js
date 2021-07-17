const fs = require('fs')
const book = {
    title: 'Ego is the Enemy',
    Author: 'Giri Babu'
}

const jsonStr = JSON.stringify(book);
//console.log('json: ' + jsonStr);

const bookObj = JSON.parse(jsonStr)
//console.log('Parsed data: '  +bookObj)
//console.log(bookObj.Author)

//fs.writeFileSync('1-json.json', jsonStr)    //accepts string as seconds arg
const fileDataRead = fs.readFileSync('1-json.json')
console.log('data read: '  +fileDataRead)

const parsedFileData = JSON.parse(fileDataRead);
console.log('data parsed: ' + parsedFileData + " Author: "  + parsedFileData.title)