const express = require("express");
const router = express.Router();
const { recipe } = require("../recipe-controller/recipe-controller");

router.route("/recipe").post(recipe);

module.exports = router;
