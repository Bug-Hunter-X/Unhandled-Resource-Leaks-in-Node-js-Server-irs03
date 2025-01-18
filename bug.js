const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

// This line is missing and will cause an error if the server is not closed.
// server.close(() => {
//   console.log('Server closed');
// });

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});