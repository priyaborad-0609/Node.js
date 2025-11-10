const fs = require("fs");

fs.writeFileSync("index.html", "Hello, from Node.js");

const readFile = fs.readFileSync("index.html", "utf8");
console.log(readFile);

fs.appendFileSync(
  "index.html",
  "\n Node.js is an open-source, cross-platform JavaScript runtime environment"
);

// try {
//   fs.unlinkSync("index.html");
//   console.log("file deleted successfully");
// } catch (err) {
//   console.log("error in deleting file", err);
// }