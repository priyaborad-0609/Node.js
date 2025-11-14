// import http from "http";

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.writeHead(200, { "content-type": "text/plain" });
//         res.end("Home page");
//     }
//     else if (req.url === "/about") {
//         res.writeHead(200, { "content-type": "text/plain" });
//         res.end("About page");
//     }
//     else if (req.url === "/profile") {
//         res.writeHead(200, { "content-type": "text/plain" });
//         res.end("Profile Page");
//     }
//     else {
//         res.writeHead(400, { "content-type": "text/plain" });
//         res.end("404 Page not found");
//     }

// });

// server.listen(5000, () => {
//     console.log("server started running...")
// });

const http = require("http");
const fs = require("fs");
const path = require("path");

// Ensure logs folder exists
if (!fs.existsSync("logs")) {
    fs.mkdirSync("logs");
}

// Log function
function logRequest(url) {
    const logPath = path.join(__dirname, "logs", "server.log");
    const time = new Date().toLocaleString();

    const logLine = `${time}  -->  ${url}\n`;

    fs.appendFile(logPath, logLine, (err) => {
        if (err) console.log("Error in logging:", err);
    });
}

const server = http.createServer((req, res) => {
    logRequest(req.url); // Log URL + time

    let filePath = "";

    if (req.url === "/") {
        filePath = path.join(__dirname, "pages", "index.html");
    } else if (req.url === "/about") {
        filePath = path.join(__dirname, "pages", "about.html");
    } else if (req.url === "/contact") {
        filePath = path.join(__dirname, "pages", "contact.html");
    } 
    // Bonus: JSON Route
    else if (req.url === "/data") {
        const data = {
            name: "File Server",
            status: "Running Successfully",
            version: "1.0.0"
        };

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(data));
    }
    else {
        filePath = path.join(__dirname, "pages", "404.html");
    }

    // Read and send the HTML file
    fs.readFile(filePath, "utf8", (err, content) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            return res.end("Server Error");
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
    });
});

server.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});

