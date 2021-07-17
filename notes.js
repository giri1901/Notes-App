const fs = require('fs');
const log = console.log
const chalk = require('chalk');

var getNote = (title, fileName) => {
    var savedNotes = loadNotes(fileName);
    return savedNotes.find((note) => note.title === title);
}

var addNotes = (title, body, fileName) => {
    const previousNotes = loadNotes(fileName)
    const newNotes = {
        title: title,
        body: body
    }

    var duplicateNote = previousNotes.find( (note) => note.title === newNotes.title);
    

    if(!duplicateNote){
        previousNotes.push(newNotes)
        saveNotes(previousNotes, fileName);
    }else{
        console.log(chalk.redBright(' Notes title already taken ::' + JSON.stringify(duplicateNote)))
    }
}

var loadNotes = (fileName) => {
    try {
        const notesDataBuffer = fs.readFileSync(fileName);

        const parsedNotes = JSON.parse(notesDataBuffer);
        parsedNotes.forEach(note => {
            log(chalk.magenta(note.title))
        });
        return parsedNotes;
    } catch (error) {
        log(chalk.redBright.inverse('No saved notes yet!'))
        return [];
    }
}

var saveNotes = (notesData, fileName) => {
    const newNotesparsedData = JSON.stringify(notesData)
    fs.writeFileSync(fileName, newNotesparsedData)
    log(chalk.green('saved notes : ' + newNotesparsedData + ' To file: ' + fileName));
}

var removeNotes = (title, fileName) => {
    var savedNotes = loadNotes(fileName);
    var notesAfterDelete = savedNotes.filter((note) => note.title !== title);
    if(savedNotes.length === notesAfterDelete.length){
        log(chalk.red.inverse('Notes with title:"' + title + '" not found to delete!'));
    }else{
        saveNotes(notesAfterDelete, fileName);
        log(chalk.greenBright.inverse('Removed note: ' + title +' from file: ' + fileName));
    }

}

module.exports = {
    getNote,
    addNotes,
    saveNotes,
    loadNotes,
    removeNotes
};