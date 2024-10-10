const fs = require("fs");
const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3001;

const MAIN_PATH = "/";
const INTRODUCTION_PATH = "/introduction";

const server = http.createServer((req, res) => {
  const path = req.url;
  if (req.method === "GET" && path === MAIN_PATH) {
    const html = fs.readFileSync("index.html", "utf8");
    res.setHeader("Content-Type", "text/html");
    res.end(html);
  } else if (path === INTRODUCTION_PATH) {
    const introduction = fs.readFileSync("./introduction.json", "utf8");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(introduction);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
