import express from "express";
import { readTweets, writeTweets } from "../services/tweetService.js";
import validateTweet from "../middleware/validateTweet.js";

const router = express.Router();

// GET all tweets
router.get("/", (req, res) => {
  const tweets = readTweets();
  res.json(tweets);
});

// POST new tweet
router.post("/", validateTweet, (req, res) => {
  const tweets = readTweets();

  const newTweet = {
    id: Date.now(),
    username: req.body.username,
    tweet: req.body.tweet,
    createdAt: new Date().toISOString() 
  };

  tweets.push(newTweet);
  writeTweets(tweets);

  res.status(201).json(newTweet);
});

// PUT update tweet
router.put("/:id", validateTweet, (req, res) => {
  const tweets = readTweets();
  const { id } = req.params;

  const index = tweets.findIndex(t => t.id == id);
  if (index === -1) return res.status(404).json({ error: "Tweet not found" });

  tweets[index].tweet = req.body.tweet;
  tweets[index].editedAt = new Date().toISOString(); // 🔥 add edited timestamp

  writeTweets(tweets);
  res.json(tweets[index]);
});

// DELETE tweet
router.delete("/:id", (req, res) => {
  const tweets = readTweets();
  const filtered = tweets.filter(t => t.id != req.params.id);
  writeTweets(filtered);
  res.json({ message: "Tweet deleted successfully" });
});

export default router;

