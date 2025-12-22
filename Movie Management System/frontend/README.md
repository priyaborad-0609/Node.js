# 🎬 Movie Management System  
### A Full-Stack MERN Application

A professionally built **Movie Management System** that allows users to manage movie records with image uploads, search functionality, and a clean, modern user interface.  
This project demonstrates **real-world full-stack development practices**, from RESTful API design to polished frontend UI.

---

## 🌟 Why This Project?

Most beginner projects stop at CRUD operations.  
This project goes a step further by focusing on:

- Clean backend architecture  
- Image handling with file storage  
- Professional UI & UX  
- Scalable folder structure  
- Industry-style coding practices  

👉 Designed to feel like a **real management system**, not just a demo app.

---

## 🚀 Key Features

### 🎥 Movie Management
- Add new movies with poster image
- Update movie details and poster
- Delete movies (poster removed from server)
- View all movies in a card-based layout
- Dedicated movie detail page

### 🔍 Smart Search
- Search movies by title
- Case-insensitive
- Supports partial matches

### 🖼️ Image Upload System
- Posters uploaded using **Multer**
- Images stored on server filesystem
- Database stores only image path
- Images served publicly for frontend display

### 🎨 UI & UX
- Professional card-based layout
- Clean forms with validation
- Image preview before upload
- Smooth hover effects & transitions
- Consistent color theme

---

## 🛠️ Tech Stack

### Frontend
- React
- React Router DOM
- Axios
- Custom CSS (UI-focused design)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer

## 📁 Project Folder Structure
```
Movie-Management-System/
│
├── backend/
│ ├── config/
│ │ └── db.js # MongoDB connection
│ │
│ ├── controllers/
│ │ └── movieController.js # Business logic
│ │
│ ├── models/
│ │ └── Movie.js # Movie schema
│ │
│ ├── routes/
│ │ └── movieRoutes.js # API routes
│ │
│ ├── middleware/
│ │ └── upload.js # Multer config
│ │
│ ├── uploads/
│ │ └── posters/ # Stored movie posters
│ │
│ ├── server.js # App entry point
│ ├── package.json
│ └── .env
│
├── frontend/
│ ├── public/
│ │ └── index.html
│ │
│ ├── src/
│ │ ├── components/
│ │ │ ├── Navbar.jsx # Navigation bar
│ │ │ └── MovieCard.jsx # Movie card UI
│ │ │
│ │ ├── pages/
│ │ │ ├── MovieList.jsx # All movies page
│ │ │ ├── MovieDetails.jsx # Single movie view
│ │ │ ├── AddMovie.jsx # Add movie form
│ │ │ └── EditMovie.jsx # Edit movie form
│ │ │
│ │ ├── services/
│ │ │ └── movieApi.js # Axios API config
│ │ │
│ │ ├── App.js
│ │ ├── index.js
│ │ └── index.css
│ │
│ └── package.json
│
├── README.md
└── .gitignore

```

## 🔗 API Overview

| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/api/movies` | Add a new movie |
| GET | `/api/movies` | Get all movies |
| GET | `/api/movies/:id` | Get movie by ID |
| PUT | `/api/movies/:id` | Update movie |
| DELETE | `/api/movies/:id` | Delete movie |
| GET | `/api/movies/search` | Search by title |

---

## 👩‍💻 Developed By

**Priya**  
Full Stack Web Developer (MERN)

A self-driven developer focused on writing clean code, building scalable backends, and creating intuitive user interfaces.  
This project demonstrates practical full-stack development skills using modern web technologies.

