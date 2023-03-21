const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { request, response } = require("express");
const Todo = require("./models/Todo");

const PORT = 8081;
const app = express();
const MONGO_CONNECTION_STRING =
  "mongodb+srv://Peacefire:BL9lHIoxnO5k73IE@peacefire.w8b3cj6.mongodb.net/test";

app.use(express.json());
app.use(cors());

app.use("/uploads", express.static("uploads"));

app.get("/list", async (request, response) => {
  const result = await Todo.find({});

  response.status(200).json({
    data: result,
  });
});

app.post("/create", async (request, response) => {
  const body = request.body;
  const result = await Todo.insertMany(body);
  

  response.status(200).json({
    data: result,
  });
});

app.put("/update", async (request, response) => {
  const body = request.body;

  const result = await Todo.updateMany(
    { name: body[1].name },
    { $set: { checked: body[0].checked } }
  );

  response.status(200).json({
    data: result,
  });
});
app.delete("/delete", async (request, response) => {
  const body = request.body;

  const result = await Todo.deleteMany(body);

  response.status(200).json({ data: result });
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Application is running on http://localhost:${PORT}`);
});
