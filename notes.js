const fs=require('fs')
const chalk=require('chalk')
const { string } = require('yargs')
const loadNote=()=>{
    try{
        return JSON.parse(fs.readFileSync('note.json'))
    }catch(e){
        return []
    }
}
const saveNote=(notes)=>{
    fs.writeFileSync('note.json',JSON.stringify(notes))
}
const addNote=(title,body)=>{
    const notes=loadNote()
    const duplicatedNotes=notes.find((x)=>x.title==title)
    if(!duplicatedNotes){
        notes.push({
            title:title,
            body:body
        })
        saveNote(notes)
        console.log(chalk.bgGreen("Note Added!"))
    }else{
        console.log(chalk.bgRed("Title is taken"))
    }
}

const removeNote=(title)=>{
    const notes=loadNote();
    const filteredNotes=notes.filter((x)=> x.title!=title)
    if(filteredNotes.length!=notes.length){
        saveNote(filteredNotes);
        console.log(chalk.bgGreen(`${title} is removed from file`))
    }
    else{
        console.log(chalk.bgRed(`No file with title ${title}`));
    }
}

const listNote=()=>{
    const notes=loadNote();
    console.log(chalk.bgGreen("And The Notes Are ......"))
    notes.forEach((note)=>console.log(`Title: ${note.title}`))
}

const readNote=(title)=>{
    const notes=loadNote();
    const found=notes.find((note)=>note.title===title)
    debugger;
    if(found){
        console.log(chalk.bgGreen.bold(found.title))
        console.log(found.body)
    }else{
        console.log(chalk.bgRed(`No note with title ${title}`))
    }
}

module.exports={addNote,removeNote,listNote,readNote}