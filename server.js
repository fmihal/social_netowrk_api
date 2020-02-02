const express = require("express");
const app = express();
const connectDB = require("./db/db");
// define route constants
const auth = require("./routes/api/auth");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");
const users = require("./routes/api/users");

connectDB();

// Init middlewares
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API active...");
});

/**
 * Define routes middleware
 *
 */

app.use("/api/auth", auth);
app.use("/api/posts", posts);
app.use("/api/profile", profile);
app.use("/api/users", users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log(`App listens on port number ${PORT}`);
});
