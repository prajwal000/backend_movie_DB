const express = require("express");
const router = express.Router();
const AddMovie = require("../controllers/AddMovie");
const getAllMovies = require("../controllers/getAllMovies");
const getSingleMovies = require("../controllers/getSingleMovies");
const editMovie = require("../controllers/editMovie");
const multer = require("multer");
const fileUpload = require("../controllers/fileupload");

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// Movie routes
router.get("/", (req, res) => {
  res.send("Welcome to the Movie Api ");
});
router.post("/movies", AddMovie);
router.get("/movies", getAllMovies);
router.get("/movies/:movies_id", getSingleMovies);
router.patch("/movies", editMovie);
router.post("/upload", upload.single("file"), fileUpload);

module.exports = router;
