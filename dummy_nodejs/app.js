const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    switch (req.url) {
        case "/":
            res.end('Index Page');
            break
        case "/page1":
            res.end('Page 1');
            break
        case "/page2":
            res.end('Page 2');
            break
        default:
            res.statusCode = 404;
            res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at port: ${port}`);
});