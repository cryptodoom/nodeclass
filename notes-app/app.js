const yargs = require('yargs')
const notes = require('./notes.js')
const log = console.log;

// Customize yargs version
yargs.version('1.1.0')

//Add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        notes.addnote(argv.title, argv.body)
    }
})

//Remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function (){
        log('Removing note!')
    }
})

//List command
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function (){
        log('Listing notes!')
    }
})

//Read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function (){
        log('Reading note!')
    }
})

yargs.parse()
//log(yargs.argv)