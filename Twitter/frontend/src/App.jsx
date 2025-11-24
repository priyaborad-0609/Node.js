import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [tweets, setTweets] = useState([]);
  const [username, setUsername] = useState("");
  const [tweetText, setTweetText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [editingUsername, setEditingUsername] = useState("");

  // Sample avatars
  const avatars = [
    "https://i.pravatar.cc/40?img=1",
    "https://i.pravatar.cc/40?img=2",
    "https://i.pravatar.cc/40?img=3",
    "https://i.pravatar.cc/40?img=4",
    "https://i.pravatar.cc/40?img=5",
    "https://i.pravatar.cc/40?img=6",
    "https://i.pravatar.cc/40?img=7",
  ];

  // Fetch all tweets
  const fetchTweets = async () => {
    const res = await fetch("http://localhost:5000/api/tweets");
    const data = await res.json();
    const dataWithAvatar = data.map((t) => ({
      ...t,
      avatar: avatars[Math.floor(Math.random() * avatars.length)],
    }));
    setTweets(dataWithAvatar.reverse());
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  // Time ago helper
  const timeAgo = (iso) => {
    const d = new Date(iso);
    const now = new Date();
    const diff = Math.floor((now - d) / 1000);
    if (diff < 5) return "just now";
    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    if (diff < 7 * 86400) return `${Math.floor(diff / 86400)}d ago`;
    return d.toLocaleDateString() + " " + d.toLocaleTimeString();
  };

  // Add tweet
  const handleAddTweet = async () => {
    if (!username.trim() || !tweetText.trim()) {
      alert("Please enter both username and tweet");
      return;
    }

    const newTweet = { username, tweet: tweetText };

    await fetch("http://localhost:5000/api/tweets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTweet),
    });

    setUsername("");
    setTweetText("");
    fetchTweets();
  };

  // Delete tweet
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this tweet?");
    if (!confirmDelete) return;
    await fetch(`http://localhost:5000/api/tweets/${id}`, { method: "DELETE" });
    fetchTweets();
  };

  // Start edit
  const startEdit = (tweet) => {
    setEditingId(tweet.id);
    setEditingText(tweet.tweet);
    setEditingUsername(tweet.username);
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
    setEditingUsername("");
  };

  // Submit edit
  const submitEdit = async (id) => {
    if (!editingText.trim() || !editingUsername.trim()) return;
    await fetch(`http://localhost:5000/api/tweets/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tweet: editingText, username: editingUsername }),
    });
    setEditingId(null);
    setEditingText("");
    setEditingUsername("");
    fetchTweets();
  };

  return (
    <div className="twitter-container">
      <aside className="left-sidebar">
        <h2 className="logo">🐦</h2>
        <ul className="menu">
          <li className="active">🏠 Home</li>
          <li>🔍 Explore</li>
          <li>🔔 Notifications</li>
          <li>✉️ Messages</li>
          <li>🔖 Bookmarks</li>
          <li>📋 Lists</li>
          <li>👤 Profile</li>
          <li>⋯ More</li>
        </ul>
        <button className="tweet-btn">Tweet</button>
      </aside>

      <main className="center-feed">
        <div className="header">Home</div>

        <div className="tweet-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: 6, padding: 6, width: "100%", borderRadius: 4 }}
          />
          <textarea
            placeholder="What's happening?"
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            style={{ width: "100%", padding: 6, borderRadius: 4 }}
          ></textarea>
          <button className="tweet-small-btn" onClick={handleAddTweet} style={{ marginTop: 6 }}>
            Tweet
          </button>
        </div>

        {tweets.map((t) => (
          <div key={t.id} className="tweet" style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <img src={t.avatar} alt={t.username} style={{ width: 40, height: 40, borderRadius: "50%" }} />
            <div style={{ flex: 1 }}>
              <div className="tweet-info">
                <b>{t.username}</b>{" "}
                <span style={{ color: "#666", fontSize: 12 }}>
                  @{t.username.toLowerCase()} · <span title={t.createdAt}>{timeAgo(t.createdAt)}</span>
                  {t.editedAt && <span style={{ marginLeft: 6, color: "#0077ff", fontSize: 11 }}>· Edited</span>}
                </span>
              </div>

              {editingId === t.id ? (
                <>
                  <input
                    type="text"
                    value={editingUsername}
                    onChange={(e) => setEditingUsername(e.target.value)}
                    style={{ marginTop: 6, padding: 4, width: "100%", borderRadius: 4 }}
                  />
                  <textarea
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    style={{ marginTop: 6 }}
                  ></textarea>
                  <div style={{ marginTop: 6 }}>
                    <button onClick={() => submitEdit(t.id)} className="tweet-small-btn">💾</button>
                    <button onClick={cancelEdit} className="tweet-small-btn" style={{ marginLeft: 6 }}>❌</button>
                  </div>
                </>
              ) : (
                <>
                  <p style={{ marginTop: 6 }}>{t.tweet}</p>
                  <div style={{ marginTop: 6 }}>
                    <button onClick={() => startEdit(t)} className="tweet-small-btn" title="Edit">✏️</button>
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="tweet-small-btn"
                      title="Delete"
                      style={{ marginLeft: 6, backgroundColor: "#ffdede", color: "#900" }}
                    >
                      🗑️
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </main>

      <aside className="right-sidebar">
        <input className="search" placeholder="Search Twitter" />
        <div className="trends">
          <h3>Trends for you</h3>
          <div className="trend-box">
            <p className="t-small">Trending worldwide</p>
            <b>#BreakingNews</b>
            <p className="t-small">10,094 people are Tweeting this</p>
          </div>
          <div className="trend-box">
            <b>Lunar photography improves</b>
            <img
              className="trend-img"
              src="https://cdn.mos.cms.futurecdn.net/5UjVcP5T7PS4RsQFsggU8d.jpg"
              alt="trend"
            />
          </div>
          <button className="show-more">Show more</button>
        </div>
      </aside>
    </div>
  );
}

