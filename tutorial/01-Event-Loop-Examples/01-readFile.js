const {readFile} = require('fs');

console.log('Starting the FIRST task.')

// FilePath for app.js, adapt to the current file.

readFile('./content/first.txt','utf-8',(err, result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('Completed the first task.')
})

console.log('Starting NEXT task.')