const express = require('express');
const app = express();
const port = process.env.PORT || 80;

console.log("Starting the server...");

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  //console.log("Request received on root endpoint");

 const formHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Node.js App</title>
    </head>
    <body>
      <h1>Hello, World! Welcome to the Node.js app deployed to Azure!</h1>
      
      <form action="/submit" method="POST">
        <label for="name">Enter your name:</label><br>
        <input type="text" id="name" name="name" required><br><br>
        <input type="submit" value="Submit">
      </form>

	  <form action="/submit" method="POST">
        <label for="username">Enter your Email Address:</label><br>
        <input type="text" id="username" name="name" required><br><br>
        <input type="submit" value="Submit">
      </form>

	  <form action="/submit" method="POST">
        <label for="Contact">Enter your Contact:</label><br>
        <input type="text" id="Contact" name="name" required><br><br>
        <input type="submit" value="Submit">
      </form>
      <form action="/submit" method="POST">
        <label for="homeaddress">Enter your Home Address:</label><br>
        <input type="text" id="homeaddress" name="name" required><br><br>
        <input type="submit" value="Submit">
      </form>


    </body>
    </html>
  `;

  res.send(formHtml); // Send the form as HTML
});

app.post('/submit', (req, res) => {
  const userName = req.body.name; // Capture the name from the form
  console.log(`Form submitted! Name: ${userName}`);
  res.send(`Thank you for submitting the form, ${userName}!`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
