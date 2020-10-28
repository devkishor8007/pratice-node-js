const http = require("http");

const fs = require("fs");
const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {
    const data = fs.readFileSync("./api.json", "utf-8");
    const objData = JSON.parse(data);

    if (req.url == "/") {
        res.end("Welcome my page api");
    } else if (req.url == "/firstapi") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(`My name is ${objData[0].name} and i am ${objData[0].age} years old as learning ${objData[0].language} for making website`);
    }else if (req.url == "/secondapi") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(`My name is ${objData[1].name} and i am ${objData[1].age} years old as learning ${objData[1].language} for making website`);
    }
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>404 error page</h1>");
    }
});

server.listen(PORT, "127.0.0.1", () => {
    console.log(`server listening at ${PORT}`);
});

