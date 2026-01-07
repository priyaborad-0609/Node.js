import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import generateOTP from '../utils/generateOTP.js';
import jwt from 'jsonwebtoken';
import BlacklistedToken from '../models/BlacklistedToken.js';

/* ================= SIGNUP ================= */
export const signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    //  Validation
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields required' });
    }

    //  Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    //  Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //  Generate OTP
    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 min

    //  Save user
    await User.create({
      email,
      password: hashedPassword,
      otp,
      otpExpiry,
      isVerified: false
    });

    console.log('OTP:', otp); // testing purpose

    res.status(201).json({
      message: 'Signup successful, OTP sent'
    });
  } catch (error) {
    res.status(500).json({ message: 'Signup failed' });
  }
};

/* ================= VERIFY OTP ================= */
export const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.otp !== otp || user.otpExpiry < Date.now()) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    // OTP verified
    user.isVerified = true;
    user.otp = null;
    user.otpExpiry = null;

    await user.save();

    res.json({ message: 'Account verified successfully' });
  } catch (error) {
    res.status(500).json({ message: 'OTP verification failed' });
  }
};

/* ================= LOGIN ================= */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || !user.isVerified) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Access Token
    const accessToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );

    // Refresh Token
    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: '7d' }
    );

    user.refreshToken = refreshToken;
    await user.save();

    res.json({
      accessToken,
      refreshToken
    });
  } catch (error) {
    res.status(500).json({ message: 'Login failed' });
  }
};

/* ================= LOGOUT ================= */
export const logout = async (req, res) => {
  try {
    //  Token nikaalo
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];

    //  Token expiry nikalo
    const decoded = jwt.decode(token);

    //  Blacklist me save
    await BlacklistedToken.create({
      token: token,
      expiresAt: new Date(decoded.exp * 1000)
    });

    return res.json({
      message: 'Logged out successfully (token blacklisted)'
    });
  } catch (error) {
    console.error('Logout error:', error);
    return res.status(500).json({
      message: 'Logout failed'
    });
  }
};

