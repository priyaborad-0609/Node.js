const fs = require("fs");

fs.writeFileSync("index.html", "Hello");

const readFile = fs.readFileSync("index.html", "utf8");
console.log(readFile);

fs.appendFileSync(
  "index.html",
  "\n This is my Web Page.."
);

// try {
//   fs.unlinkSync("index.html");
//   console.log("file deleted successfully");
// } catch (err) {
//   console.log("error in deleting file", err);
// }