const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log(second);

writeFileSync('./content/result.txt', `These are my texts: \n ${first} \n ${second}. \n`);

// To append the etxt and no OVERWRITE it:

writeFileSync('./content/result.txt', 'this will be appended and not overwritten.', {flag:'a'});