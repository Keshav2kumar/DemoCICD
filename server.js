// server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

console.log("Starting the server...");

// Example of adding more detailed output
app.get('/', (req, res) => {
  console.log("Request received on root endpoint");
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
