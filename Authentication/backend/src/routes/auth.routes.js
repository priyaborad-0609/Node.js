import express from 'express';
import {
    signup,
    verifyOTP,
    login,
    logout,
} from '../controllers/auth.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';


const router = express.Router();

router.post('/signup', signup);
router.post('/verify-otp', verifyOTP);
router.post('/login', login);
router.post('/logout', authMiddleware, logout);

export default router;



// Protected route (login ke bina access nahi milega)
router.get('/me', authMiddleware, (req, res) => {
  res.status(200).json({
    message: 'User profile fetched successfully',
    user: req.user
  });
});
