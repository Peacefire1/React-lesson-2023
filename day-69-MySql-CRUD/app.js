console.log("DAY-69");

// const express = require("express");

import express from "express";
import admin from "./routes/admin.js";
import apiRouter from "./routes/api.js";
import cors from "cors";
import emp_router from "./routes/api.js";
import { getPopularCategories } from "./servecis/category-services.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
app.use("/admin", admin);
app.use("/api", apiRouter);

app.get("/", (request, response) => {
  //   console.log(result);
  response.send(
    "<h1 style='text-align: center; background-color:orange'> Day-69 </h1>"
  );
});

app.listen(PORT, () => {
  console.log(`Express App is running on http://localhost:${PORT}`);
});
