const fs  = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    console.log("request made");

    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);
    path = './views/'
    switch(req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/index':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            break;
    }
    console.log(path);
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }

    })

});

server.listen(3000, 'localhost', () => {
    console.log('listening on 3000');
})

