const http = require("http");
const PORT = process.env.PORT || 3500


const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("Welcome to my page");
    } else if (req.url == "/home") {
        res.end("This is Home Page");
    }else if (req.url == "/about") {
        res.end("This is About Page");
    }else{
        res.end("<h1>404 page found</h1>");
    }
});



server.listen(PORT, "127.0.0.1", () => {
    console.log(`server is running ${PORT}`);
});