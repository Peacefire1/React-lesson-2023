// const express = require("express");
import express,{ Express } from "express"
// const cors = require("cors");
// import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()


const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://localhost:27017/test";
const app: Express = express();

app.use(express.json());
// app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Day-86-MongoDB Transaction</h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Application is running on http://localhost:${PORT}`);
});
