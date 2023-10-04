const yargs=require("yargs")
const notes=require('./notes')


yargs.command({
    command:"add",
    description:"Add a new text to file",
    builder:{
        title:{
            description:"Title of the text",
            demandOption:true,
            type:'string'
        },
        body:{
            description:"Body of the text",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:"remove",
    description:"remove a text from file",
    builder:{
        title:{
            description:'Title to be removed',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:"read",
    description:"read from a file",
    builder:{
        title:{
            description:"Title for file to be read",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})

yargs.command({
    command:"list",
    description:"list files",
    handler(){
        notes.listNote();
    }
})

yargs.parse();