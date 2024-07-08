const mongoose = require("mongoose");
const getSingleMovies = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  try{
    const moviesData = await moviesModel.findOne({
        _id: req.params.movies_id,
      });
    
      res.status(200).json({
        status: "success",
        data: moviesData,
      });
    }catch(err){
        res.status(400).json({
            status: "Error",
            message: "failed to get single movie please check the id",
          });
    }
  }
 

module.exports = getSingleMovies;
