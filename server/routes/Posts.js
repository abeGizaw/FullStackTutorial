const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

router.get("/", async (req, res) => {
  const listOfPosts = await Posts.findAll();
  res.json(listOfPosts);
});

//async await for sequelize. The reason being we want to wait for data to be inserted before we move forward with the request
router.post("/", async (req, res) => {
  //we expect the frontend to send some json that has all the data we need in the request
  const post = req.body;
  await Posts.create(post);

  res.json(post);
});

module.exports = router;
