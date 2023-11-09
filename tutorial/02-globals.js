// GLOBALS - NO WINDOW

// __dirname    - path to current directory 
// __filename   - file anme
// require      - function to use modules (CommonJS)
// modules      - info about current module (file)
// process      - info about where the program is being executed

// console.log(__dirname);
console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(process);

const id = setInterval( () => { // setInterval will generate an id for the interval
    console.log('this is delayed') // print this after the delay
    clearInterval(id); // breat the interval (id), if not will keep printing
}, 1000); // delay

