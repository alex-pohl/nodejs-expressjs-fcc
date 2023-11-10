const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('This is my homepage!')
    }else if (req.url === '/about'){
        res.end('Company history or whatever')
    } else{ 
        res.end(`
        <h1> this is an ERROR </h1>
        <p> Probably should go back bro.</p>
        <a href="/">Go back</a>
        `)
}})

server.listen(5000);