const http = require('http');

const server = http.createServer((req, res) => {
    console.log("request made");

    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello Azhar');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening on 3000');
})

