import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "../data/tweets.json");

// Read File
export function readTweets() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

// Write File
export function writeTweets(tweets) {
  fs.writeFileSync(filePath, JSON.stringify(tweets, null, 2));
}






