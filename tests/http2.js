const http2 = require('http2');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 5000;

const options = {
  key: fs.readFileSync('C:\\xampp\\htdocs\\search-engine-2\\tests\\key.pem'),
  cert: fs.readFileSync('C:\\xampp\\htdocs\\search-engine-2\\tests\\server.crt'),
  requestCert: false,
  rejectUnauthorized: false
};

// Create a plain-text HTTP/2 server
const server = http2.createSecureServer(options);

server.on('stream', (stream, headers) => {
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  stream.end('Hello Word');
});

server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}/ !!!`);
});