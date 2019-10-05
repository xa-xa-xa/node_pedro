const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello world from Node.js!');
        res.end();
    } else {
        res.write('use other domain');
        res.end();
    }
})

server.listen('3000');