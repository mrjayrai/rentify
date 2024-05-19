const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  // Get token from header
  const token = req.header('Authorization');

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'Authorization denied. No token provided.' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Add userid from payload to request object
    req.userid = decoded.user.id;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Token is not valid.' });
  }
};

module.exports = verifyToken;
