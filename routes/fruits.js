const express = require("express");
const router = express.Router();
const { getFruits, sendFruit } = require("../controllers/fruitsController");

const path = require("path");
// const multer = require("multer");

// //Show where to store downloaded files
// const storage = multer.diskStorage({
//   destination: "./assets/",
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// const upload = multer({ storage });

//Get All fruits
router.get("/", getFruits);

//Get fruit by id
router.get("/:id", (req, res) => res.send("Get one fruit"));

//Send fruit
//upload.single("image"),
router.post("/", sendFruit);

module.exports = router;
