const fs = require('fs')

//console.log('notes.js called')
//Creates modules that can be loaded into other files via require()

//Create module (function) and set to variable
const getNotes = function () {
    return 'Your notes...'
}

// Add note
const addNote = function (title, body) {
    const notes = loadNotes()
    const dupNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (dupNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note already exists!')
    }
}

//Remove note
const removeNote = function (title, body) {
    const notes = loadNotes()
    const dupNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (dupNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note already exists!')
    }
}

//Save Notes
const saveNotes = function (notes){
    const dataJSON =  JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

//Load notes
const loadNotes = function () {
    try {
        const buffer = fs.readFileSync('notes.json')
        const dataJSON = buffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }
}
//export specific modules
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}