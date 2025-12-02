<h1>🐦 Mini Twitter – Tweet Posting App</h1>
<p>A modern Mini Twitter clone built with React (Frontend) + Node.js & Express (Backend).
Users can post, edit, delete, and view tweets in a clean Twitter-like interface. The backend uses a simple JSON file as a "database" to store tweets.</p>

<h3>🎯 Features</h3>
<ul>
  <li>✅ Post Tweets – Add a tweet with your username.</li>
  <li>✅ Edit Tweets – Update your tweet content anytime (shows “Edited” badge).</li>
  <li>✅ Delete Tweets – Remove tweets you no longer want.</li>
  <li>✅ Random Avatars – Each tweet displays a randomly assigned avatar.</li>
  <li>✅ Responsive Layout – Works on desktop and mobile.</li>
  <li>✅ Middleware Validations – Backend validates tweet content length and ensures non-empty input.</li>
  <li>✅ File-based Storage – Uses tweets.json as lightweight storage, no database required.</li>
  <li>✅ Professional Folder Structure – Organized for scalability and clarity.</li>
</ul>

<h3>📁 Folder Structure</h3>

```markdown
project/
 ├─ backend/
 │    ├─ app.js               # Express server
 │    ├─ routes/
 │    │     └─ tweetRoutes.js # API routes for CRUD
 │    ├─ middleware/
 │    │     ├─ logger.js      # Logs requests
 │    │     └─ validateTweet.js # Validates tweet content
 │    ├─ services/
 │    │     └─ tweetService.js # Read/write to tweets.json
 │    ├─ data/
 │    │     └─ tweets.json     # Stores all tweets
 │    └─ package.json          # Backend dependencies
 └─ frontend/
      ├─ src/
      │    ├─ App.jsx         # Main React app
      │    └─ App.css         # Styles
      └─ package.json          # Frontend dependencies

```

<h3>⚙️ Installation & Run</h3>
<p>1. Clone the repository</p>

```markdown
git clone https://github.com/your-username/mini-twitter.git
cd mini-twitter
```

<p>2. Install backend</p>

```markdown
cd backend
npm install
```

<p>3. Run backend</p>

```markdown
node app.js
```
The backend server will run on: http://localhost:5000

<p>4. Install frontend</p>

```markdown
cd ../frontend
npm install
```

<p>5. Run frontend</p>

```markdown
npm start
```
Frontend runs on: http://localhost:3000 (make sure proxy is set to backend)

<h3>🚀 Screenshot / UI</h3>

<img width="1360" height="611" alt="Screenshot (167)" src="https://github.com/user-attachments/assets/de3840fa-2a8b-4478-b86b-6e07ea1a7c36" />

<h4>Watch the Mini Twitter App! 🎬</h4>
https://drive.google.com/file/d/17P_JpXwNsxF6PGH4iLuXxBqKNmlEQWn3/view?usp=sharing

