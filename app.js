const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.end("Hello from Docker + GitHub Actions!");
});

server.listen(port, () => {
  console.log(`App running on port ${port}`);
});
