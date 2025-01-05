const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

console.log("Starting the server...");

// Middleware to log all requests
app.use((req, res, next) => {
  console.log(`[INFO] Request received: ${req.method} ${req.originalUrl}`);
  next(); // Proceed to the next middleware or route handler
});

// Home route
app.get('/', (req, res) => {
  console.log("Request received on root endpoint");
  res.send('Hello, World! Welcome to the Node.js app deployed to Azure!');
});

// About route with dynamic data
app.get('/about', (req, res) => {
  console.log("Request received on /about endpoint");

  const appInfo = {
    appName: "MyNodeApp",
    version: "1.0.0",
    environment: process.env.NODE_ENV || "development"
  };

  res.json(appInfo);
});

// Error handling route
app.get('/error', (req, res) => {
  console.log("Request received on /error endpoint");

  // Simulate an error for testing
  try {
    throw new Error("This is a simulated error");
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).send("Something went wrong!");
  }
});

// 404 Route for undefined paths
app.use((req, res) => {
  console.log(`404 Not Found: ${req.originalUrl}`);
  res.status(404).send('Oops! Page not found.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
