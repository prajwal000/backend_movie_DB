const express = require("express");
const cors = require("cors");
require("./database/mongoose"); // Import the mongoose setup file

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const movieRoutes = require("./routes/routes.js"); // Import the routes
app.use("/api", movieRoutes); // Use the routes

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
