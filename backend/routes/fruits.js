const express = require("express");
const router = express.Router();
const {
  getFruits,
  getFruit,
  sendFruit,
} = require("../controllers/fruitsController");
const path = require("path");
const multer = require("multer");

//Show where to store downloaded files
const storage = multer.diskStorage({
  destination: "./assets/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

//Get All fruits
router.get("/", getFruits);

//Get fruit by id
router.get("/:id", getFruit);

//Send fruit
router.post("/", upload.single("image"), sendFruit);

module.exports = router;
