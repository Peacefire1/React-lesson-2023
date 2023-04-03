// const express = require("express");
import express, { Express } from "express";
// const cors = require("cors");
// import cors from "cors"
import dotenv from "dotenv";
import mongoose from "mongoose";
import theaterRouter from "./routes/Theaters-api";
dotenv.config();

const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING || "mongodb://localhost:27017/test";
const app: Express = express();

app.use(express.json());
// app.use(cors());

let name: string = "<h1>Day-90-Express-TypeScript</h1>"
// let phoneNumber:number = 99119911
// let isMarried: boolean = false
// let sheeps:Array<string> = ["sheep1","sheep2","sheep3",]
// let sheep:string[]=["sheep1","sheep2","sheep3"]

// let sheepObject:{name:string,age:number}={
//   name:"sheep1",
//   age:1
// }

// sheepObject.name = "sheep2"
// sheepObject.age = 3
app.get("/", (req, res) => {
  res.send(name);
});
app.use("/theater",theaterRouter)

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Application is running on http://localhost:${PORT}`);
});
