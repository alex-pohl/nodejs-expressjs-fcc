const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('request event');
    res.end('Request answered lol')
})

server.listen(5000, () => {
    console.log('Listening on port:  5000 .....')
})