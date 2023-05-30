// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express
const app = express();

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Define a POST route
app.post('/api/data', (req, res) => {
  const { name, age } = req.body;
 
  // Perform some operation with the received data
  // For example, you can save it to a database
 
  // Send a response
  res.json({ message: 'Data received successfully', name, age });
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
