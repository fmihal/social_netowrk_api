const jwt = require("jsonwebtoken");
const config = require("config");

/**
 * Middleware functions are functions that have access to the request object (req), the response object (res), 
 * and the next middleware function in the application’s request-response cycle. 
 * The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

* Execute any code.
* Make changes to the request and the response objects.
* End the request-response cycle.
* Call the next middleware function in the stack.
* If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
 */

module.exports = function(req, res, next) {
  // Get token from the header
  const token = req.header("x-auth-token");

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authentication denied" });
  }

  // Verify
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid !" });
  }
};
