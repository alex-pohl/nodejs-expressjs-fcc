const {readFile, writeFile, readFileSync} = require('fs');

readFile('./content/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err)
    }
    first = result;
    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err)
        }
        second = result;
        writeFile('./content/result.txt', first+second, (err,result)=> {
            if(err){
                console.log(err)
            }
            console.log(result);
        })
    })
})