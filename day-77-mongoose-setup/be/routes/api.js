const { request, response } = require("express");
const express = require("express");
const Router = express.Router();
const User = require("../models/Users");

Router.get("/users", async (request, response) => {
  const result = await User.find({});
  response.json({ data: result });
});

Router.post("/user", async (request, response) => {
  const body = request.body;

  const newUser = new User(body);
  const result = await newUser.save();
  console.log(result);
  response.json({
    data: result,
  });
});

Router.delete("/user", async (request, response) => {
  const body = request.body;
  console.log(body);

  const result = await User.deleteOne(body);

  response.json({
    data: result,
  });
});

Router.get("/user", (request, response) => {
  const body = request.body;
  console.log(body);

  response.json({
    data: result,
  });
});

module.exports = Router;
