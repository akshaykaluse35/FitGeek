const jwt = require('jsonwebtoken');
const User = require("../models/user-models");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized HTTP, Token not provided" });
  }

  const jwtToken = token.replace("Bearer", "").trim();

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    
    if (!isVerified) {
      throw new Error('Token verification failed');
    }

    const fetchdata = await User.findOne({ email: isVerified.email }).select({ password: 0 });

    if (!fetchdata) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log("This is user data:", fetchdata);

    req.users = fetchdata;
    req.id = fetchdata._id;

    next();
  } catch (error) {
    console.error('Error in authMiddleware:', error.message);
    
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ msg: `Invalid token: ${error.message}` });
    } else if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ msg: `Token expired: ${error.message}` });
    } else {
      return res.status(400).json({ msg: `This is for jwt token error: ${error.message}` });
    }
  }
};

module.exports = authMiddleware;
