const express = require("express");
require("dotenv").config();
const AddMovie = require("./controllers/AddMovie");
const getAllMovies = require("./controllers/getAllMovies.js");
const getSingleMovies= require("./controllers/getSingleMovies")
//connecting mongoose to mangodb
const mongoose = require("mongoose");
const editMovie = require("./controllers/editMovie.js");

const connectionString = process.env.mongo_connection;

mongoose.connect(connectionString, {})
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

const app = express();
app.use(express.json());

//models
require("./models/movies.model.js")

// Middleware to parse JSON
app.use(express.json());

//routes
app.post("/api/movies", AddMovie);
app.get("/api/movies",getAllMovies)
app.get("/api/movies/:movies_id",getSingleMovies)
app.patch('/api/movies',editMovie)

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
