export default function validateTweet(req, res, next) {
  const { tweet } = req.body;

  // Empty check
  if (!tweet || tweet.trim() === "") {
    return res.status(400).json({ error: "Tweet cannot be empty" });
  }

  // Minimum length check
  if (tweet.length < 5) {
    return res
      .status(400)
      .json({ error: "Tweet must be at least 5 characters long" });
  }

  next();
}


