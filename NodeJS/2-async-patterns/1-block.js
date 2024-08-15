const http = require("http");

// This whole code is synchronous. There is a time consuming part (for loop) in this code.
// If a user request the about page, then all the users have to wait until the about page is loaded.
// Because loading the about page is the most time consuming part in the code because of the for loop.
// This code will block other users.
// Therefore we prefer asynchronous coding. It won't block users.

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Home Page");
    } else if (req.url === "/about") {
        // BLOCKING CODE !!!
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i}, ${j}`);
            }
        }
        res.end("About Page");
    } else {
        res.end("Error Page");
    }
});

server.listen(5000, () => {
    console.log("Server Listening on port 5000....");
});
