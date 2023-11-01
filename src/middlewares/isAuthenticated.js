// authMiddleware.js

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  // Passport adds isAuthenticated() to the request object
  if (req.isAuthenticated()) {
    return next(); // User is authenticated, proceed to the next middleware/route handler
  }

  // User is not authenticated, redirect to login page or send an unauthorized response
  res.status(401).json({ message: 'Unauthorized' });
};

module.exports = { isAuthenticated };