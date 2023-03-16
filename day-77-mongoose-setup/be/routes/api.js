const { request, response } = require("express");
const express = require("express");
const Router = express.Router();
const User = require("../models/Users");

Router.get("/users", async (request, response) => {
  const result = await User.find({});
  response.json({ data: result });
});

Router.get("/user", async (request, response) => {
  const userId = request.query.id;
  console.log(userId);

  const user = await User.findOne({ _id: userId });

  response.json({
    data: user,
  });
});

//get user by email

Router.get("/userByEmail", async (request, response) => {
  const emailUser = request.query.email;

  const foundUser = await User.find({ email: emailUser }, "_id name email", {
    sort: "lastLogin",
  }).exec();

  response.json({
    data: foundUser,
  });
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

Router.get("userGetEmail", async (request, response) => {
  const userEmail = request.query.email;

  const foundUser = await User.findByUserEmail(userEmail);

  response.json({
    data: foundUser,
  });
});

Router.put("/updateOneUser", async (request, response) => {
  const result = await User.updateOne(
    { email: "tsogtoo@gmail.com" },
    { $set: { lastLogin: Date.now() } }
  );

  response.json({ data: result });
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
