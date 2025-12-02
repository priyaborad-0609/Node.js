<h1>🎬 Movie Library API</h1>
<p>A well-structured and scalable Movie Library REST API built using Node.js, Express, and MongoDB (Mongoose).
This project showcases clean architecture, reusable controllers, middleware usage, schema validation, and efficient database operations.</p>

<h3>⭐ Features</h3>
<ul>
  <li>➕ Add a new movie</li>
  <li>📄 Get all movies</li>
  <li>🔍 Get a single movie by ID</li>
  <li>✏️ Update movie details</li>
  <li>❌ Delete movie</li>
  <li>🕒 Auto timestamps (createdAt, updatedAt)</li>
  <li>📌 Custom Logger Middleware (tracks all API requests)</li>
  <li>🗂️ Neat and modular folder structure</li>
</ul>

<h3>🛠️ Tech Stack</h3>
<ul>
  <li>Node.js – Backend runtime</li>
  <li>Express.js – Web framework</li>
  <li>Mongoose – ODM for schema & models</li>
</ul>

<h3>📚 Core Concepts Implemented</h3>
<ul>
  <li>Mongoose Schema with validation</li>
  <li>Model-based database operations</li>
  <li>Async/await for clean async code</li>
  <li>Centralized routes</li>
  <li>Middleware (logger) for tracking:</li>
  
  ```Mark
  Visited → [METHOD] /route
```
  <li>Error handling with status codes</li>
</ul>

<h3>Project Structure</h3>

```Mark
bookstore/
│
├─ package.json            
├─ server.js                 
│
├─ config/
│   └── db.js              
│
├─ models/
│   └── Book.model.js       
│
├─ controllers/
│   └── Book.controller.js   
│
├─ routes/
│   └── Book.routes.js   
│
└─ middleware/
    └── logger.js            
```


<p>👉 Postman Demo Link : https://drive.google.com/file/d/1ic5_2UKht8hpLqrYcoprPjsnL1KAsBkv/view?usp=sharing</p>
