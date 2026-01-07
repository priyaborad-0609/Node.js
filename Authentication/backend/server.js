import dotenv from 'dotenv';
dotenv.config(); 

import connectDB from './src/config/db.js';
import app from './src/app.js';

/* ---------- Database ---------- */
connectDB();

/* ---------- Server ---------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
