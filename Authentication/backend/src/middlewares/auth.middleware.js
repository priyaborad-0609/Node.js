import jwt from 'jsonwebtoken';
import BlacklistedToken from '../models/BlacklistedToken.js';

const authMiddleware = async (req, res, next) => {
  try {
    //  Header check
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Token missing' });
    }

    //  Token extract
    const token = authHeader.split(' ')[1];

    //  Blacklist check
    const isBlacklisted = await BlacklistedToken.findOne({ token });
    if (isBlacklisted) {
      return res.status(401).json({ message: 'Token is blacklisted. Please login again.' });
    }

    //  Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

export default authMiddleware;
