const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-Type": "text/plain" });
  res.end("Server is Running successfully");
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});


const server1 = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ students: students }));
});

server1.listen(3000, () => {
  console.log("server is running on 3000");
});

 const students = [
    {
      "id": 1,
      "name": "Aarav Sharma",
      "age": 20,
      "course": "Computer Science",
      "email": "aarav@example.com",
      "marks": {
        "math": 88,
        "science": 92,
        "english": 85
      }
    },
    {
      "id": 2,
      "name": "Priya Verma",
      "age": 22,
      "course": "Information Technology",
      "email": "priya@example.com",
      "marks": {
        "math": 79,
        "science": 81,
        "english": 90
      }
    },
    {
      "id": 3,
      "name": "Rohan Patel",
      "age": 21,
      "course": "Electronics",
      "email": "rohan@example.com",
      "marks": {
        "math": 85,
        "science": 89,
        "english": 78
      }
    }
  ]
