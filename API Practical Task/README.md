# 🛠️ Express + MongoDB Filter API Practical Task

## 📌 Overview
A **hands-on backend project** designed to help students master **REST API development** using **Express.js**, **MongoDB**, and **Mongoose**.  
This project focuses on **dynamic filtering, sorting, pagination, and multi-field querying** of a product collection.

---

## ✨ Key Features
- 📝 **CRUD Operations** – Focused on GET routes for fetching products  
- 🔍 **Advanced Search & Filters:**  
  - Search by `productName` (case-insensitive)  
  - Filter by `brand`, `category`, `price range`, and `rating`  
  - Combine multiple filters in a single API call (bonus!)  
- 📊 **Sorting & Pagination:**  
  - Sort products by price (ascending/descending)  
  - Paginate results with total count & total pages  
- ⚡ **Error Handling:** Returns `"No products found"` if filters yield no results  
- 🛠️ **Backend-Only Project:** Focused purely on API logic and testing  
- 🧪 **Postman Testing:** Students must demonstrate all API routes  

---

## 💻 Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Tools:** Postman, dotenv  

---

## 🎯 Learning Outcomes
- Build **scalable REST APIs** with multiple query options  
- Implement **dynamic filtering, sorting, and pagination**  
- Understand **error handling and API best practices**  
- Gain hands-on experience with **backend testing using Postman**  

---

## ⚡ Quick Start
```bash
# Clone the repo
git clone <repo-url>

# Install dependencies
npm install

# Start the server
nodemon server.js
