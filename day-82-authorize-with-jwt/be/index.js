const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const adminRouter = require("./routes/Admin-api");
const apiRouter = require("./routes/Api");

const PORT = 8080;
const app = express();

const MONGO_CONNECTION_STRING =
  "mongodb+srv://Peacefire:Bloodseeker12@peacefire.w8b3cj6.mongodb.net/test";

app.use(express.json());
app.use(cors());
app.use("/admin", adminRouter);
app.use("/api", apiRouter);

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Application is running on http://localhost:${PORT}`);
});
