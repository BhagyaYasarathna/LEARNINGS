const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
//  req => middleware => res

// If we add a path, the middleware is only applied to the apis start with that path
// app.use("./api", logger);

app.use([logger, authorize]);
// api/home/about/products

// app.get('/', [logger, authorize], (req, res))
app.get("/", (req, res) => {
    res.send("Home");
});
app.get("/about", (req, res) => {
    res.send("About");
});
app.get("/api/products", (req, res) => {
    res.send("Products");
});
app.get("/api/items", (req, res) => {
    console.log(req.user);
    res.send("Items");
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000....");
});

// since we added the authorize middleware in this code,
// the url should be end with ?user=john part
// otherwise it will get 'Unauthorized' text in the page
