const { response } = require("express");
const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (request, response) => response.send("Get All fruits"));
router.get("/:id", (request, response) => response.send("Get one fruit"));
router.post("/", (request, response) => response.send("Send fruit"));

module.exports = router;
