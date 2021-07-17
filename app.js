const fs = require('fs');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');
const utils = require('./utils');

const fileName = 'notes.txt';
const log = console.log

/*fs.writeFileSync(fileName, 'Hello Giri, this is created by Node.js');
fs.appendFileSync(fileName, '\nHey, This text is appended to the existing file!!');

log("My notes is: " + getNotes());

log("Is Valid email: " + chalk.yellow.redBright(validator.isEmail('giri.chippada#gmail.com')));
utils.isValidURL("http://localhost:3000");
utils.isValidURL("http://sample-url.com");
*/

//Customize args Version
yargs.version('1.1.0')
//log(process.argv[2])
//log(yargs.argv) //node app.js add --title="My Notes title"


/*if(process.argv[2] === 'add'){
    log('Adding notes..!')
}else if(process.argv[2] === 'remove'){
    log('Removing notes..!')
}else if(process.argv[3] === 'update'){
    log('Updating notes..!')
}*/

//Create Add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "New Note",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Notes Body",
            demandOption: true,
            type: 'string'
        },
        fileName: {
            describe: "Notes data File name",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.addNotes(argv.title, argv.body, argv.fileName)
})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Notes Title to be removed',
            demandOption: true,
            type: 'string'
        },
        fileName: {
            describe: 'Notes file name',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (args) => notes.removeNotes(args.title, args.fileName)
})

yargs.command({
    command: 'list',
    describe: 'Lists all the notes',
    builder: {
        fileName: {
            describe: "Notes file name",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (args) => notes.loadNotes(args.fileName)
})

yargs.command({
    command: 'read',
    describe: 'Reads a note',
    builder: {
        title: {
            describe: "Book ttitle to read",
            demandOption: true,
            type: 'string'
        },
        fileName: {
            describe: "Notes file name",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (args) => {
        const note = notes.getNote(args.title, args.fileName) 
        if(!note){
            log(chalk.redBright.inverse('Note not found with title:' + args.title))
        }else{
            log(chalk.green(note.body))
        }
    }
})
//log(yargs.argv)
yargs.parse();