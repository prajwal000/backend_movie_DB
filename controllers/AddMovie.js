const mongoose = require("mongoose");
const AddMovie = async(req, res) => {
const moviesModel=mongoose.model("movies") 
  const { movie_name, info, rating } = req.body;
  console.log(req.body);


  //validations
  try{
    if (!movie_name) throw "movie name is required";
    if (!info) throw "info is required";
    if (!rating) throw "rating is required";
    if(rating < 0 || rating > 10) throw "rating must be between 0 and 10";
      
  }catch(error){
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }

  try{
    const moviecreated=await moviesModel.create({
        movie_name: movie_name,
        info: info,
        rating: rating, 
      })
  }
  catch(err){
    res.status(400).json({
        status: "fail",
        message: "Movie creation failed something went wrong",
      });
  }

  res.status(200).json({
    status: "success",
    message: "Movie added successfully",
  });
};

module.exports = AddMovie;
