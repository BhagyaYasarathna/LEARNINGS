const express = require("express");
const app = express();

//  req => middleware => res

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    // res.send("Testing");
    next();
};

app.get("/", logger, (req, res) => {
    res.send("Home");
});
app.get("/about", logger, (req, res) => {
    res.send("About");
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000....");
});

// There are 2 issues with this setup
// 1- It is good to have this middleware functions in seperate files.
// 2- Adding middleware functions mannually is not a good practice.
