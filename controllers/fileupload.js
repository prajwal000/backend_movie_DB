const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const fileUpload = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "file uploaded successfully",
  });
  console.log(req.file);
  console.log(req.body);
};

module.exports = fileUpload;
