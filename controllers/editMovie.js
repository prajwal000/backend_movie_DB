const mongoose = require("mongoose");
const editMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  const { movie_id, movie_name, rating, info } = req.body;

  //validators

  try {
    if (!movie_id) throw "movie_id is required";
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error,
    });
    return;
  }

  try {
    await moviesModel.updateOne(
      { _id: movie_id },
      { movie_name: movie_name, rating: rating, info: info },
      {
        runValidators: true,
      }
    );
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: "failed while updating the movie ",
    });
    return;
  }
  res.status(200).json({
    status: "Success",
    message: "Movie name updated sucessfully",
  });
  return;
};
module.exports = editMovie;
