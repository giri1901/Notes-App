const fs = require('fs');
const { type } = require('os');
const yargs = require('yargs')
const log = console.log
var fileReadData;

yargs.command({
    command: 'read',
    describe: 'Reads File',
    builder: {
        file: {
            describe: 'File Name',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function name(argv) {
        fileReadData = fs.readFileSync(argv.file);    
        log('data read: ' + fileReadData);
    }
})

yargs.command({
    command: 'update',
    describe: 'Updates the File data',
    builder: {
        file : {
            describe: 'File name to update data',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function name(args) {
        fileReadData = fs.readFileSync(args.file);
        var parsedData  = JSON.parse(fileReadData);
        parsedData.age = '25'
        parsedData.name = 'Jackson'

        const updatedDataStr = JSON.stringify(parsedData);
        log('updating to file' + args.file + ' with data: ' + updatedDataStr)

        fs.writeFileSync(args.file, updatedDataStr);
    }
})

yargs.command({
    command: 'write',
    describe: 'Writes to file',
    builder:{
        file: {
            describe: 'File Name to write',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function name(args) {
        log('Written to file : ' + args.file)
        fs.writeFileSync(file, fileReadData)
    }
})

/*var fileReadData = fs.readFileSync(yargs.argv.file);    // node .\sample-json.js --file="sample.json"
log('data read: ' + fileReadData);

var user = JSON.parse(fileReadData);

user.name = "Giri babu"
user.age = "30"

const sampleJsonDataStr = JSON.stringify(user)

log('String data: ' + sampleJsonDataStr.toString());

fs.writeFileSync(yargs.argv.file, sampleJsonDataStr)*/

yargs.parse();