// // Import required modules
// const express = require("express");
// const bodyParser = require("body-parser");

// const cors = require("cors");

// // Create an instance of Express
// const app = express();

// // Middleware for parsing JSON data
// app.use(bodyParser.json());

// app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

// app.get("/api/data",(req,res)=>{
//     // const data = req.body;
//     console.log("Hello there")
//     res.send("YESSS");
//     res.json({ message: "Data gettting recieved", customerName, address });
// })

// //logic for two parameters
// app.post("/api/data", (req, res) => {
//   const { customerName, address } = req.body;

//   res.json({ message: "Data gettting recieved", customerName, address });
//   console.log(customerName);
//   console.log(address);
// });

// // Define a POST route
// // app.post('/api/data', (req, res) => {
// //   const { name, age } = req.body;

// //   // Perform some operation with the received data
// //   // For example, you can save it to a database

// //   // Send a response
// //   res.json({ message: 'Data received successfully', name, age });
// //   console.log(name)
// //   console.log(age)

// // });

// // Start the server
// const port = 5000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Create an instance of Express
const app = express();

// Middleware for parsing JSON data
app.use(bodyParser.json());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Endpoint to handle the POST request
app.post("/api/data", (req, res) => {
  const { customerName, address } = req.body;

  console.log(customerName); // Print customerName to the console
  console.log(address); // Print address to the console

  res.json({ message: "Data received successfully" });
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
