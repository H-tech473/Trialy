const express = require("express");
const serverless = require("serverless-http");
const path = require("path");

// Create an instance of the Express app
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"../dist"));
// Create a router to handle routes
const router = express.Router();

// Define a route that responds with a JSON object when a GET request is made to the root path
router.get("/", (req, res) => {
  res.send("hello");
});

// Use the router to handle requests to the `/.netlify/functions/api` path
app.use(`/.netlify/functions/api`, router);

// Export the app and the serverless function
module.exports = app;
module.exports.handler = serverless(app);