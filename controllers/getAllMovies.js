const mongoose = require("mongoose");
const getAllMovies = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  try {
    const moviesData = await moviesModel.find({});

    res.status(200).json({
      status: "success",
      data: moviesData,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "fail while getting the data",
    });
  }
};

module.exports = getAllMovies;
