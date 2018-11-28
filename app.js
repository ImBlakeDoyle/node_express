const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;

    let url = req.url;
    let method = req.method;

    if ( method === "GET" && url === "/") {
        res.setHeader("Content-Type", "text/plain");
        console.log("match the students");
    } else if ( method === "GET" && url === "/students") {
        res.setHeader("Content-Type", "application/json; charset=UTF-8");
        res.end(JSON.stringify(students));
        console.log("Show list of students");

    } else if ( method === "POST" && url === "/students") {
        console.log("create new student");
    } else if ( url === "/favicon.ico") {
        console.log("We don't have a favicon");
    } else {
        console.log("route not found");
        throw "Route not found";
    }

    // res.end("Hello World");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});