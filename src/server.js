const http = require('http');

const PORT = 8088;
const MESSAGE = 'Hello! Good luck, DevOps Engineer!';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(MESSAGE);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
