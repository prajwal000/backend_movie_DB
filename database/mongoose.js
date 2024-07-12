const mongoose = require("mongoose");
require("dotenv").config();

const connectionString = process.env.mongo_connection;

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

// Models
require("../models/movies.model.js"); // Adjust the path as necessary

module.exports = mongoose;
