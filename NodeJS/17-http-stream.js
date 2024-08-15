var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // in the res.end method, we send whole data at the same time.
    // this is not acceptable for very large files.
    // res.end(text)
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
        // here we send the data as small chunks.
        fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
        res.end(err);
    });
}).listen(5000);
