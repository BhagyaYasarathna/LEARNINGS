const http = require("http");

const server = http.createServer((req, res) => {
    // when there is a request, this callback will be invoked
    console.log("request event");
    res.end("Hello World");
});

server.listen(5000, () => {
    console.log("Server listening on port : 5000....");
});
