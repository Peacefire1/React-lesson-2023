console.log("it is my app.js");
// import necessary module
const express = require("express");
const cors = require("cors");
const fs = require("fs");

/// condiguration of modules
const app = express();
const PORT = 8081;

app.use(cors());
app.use(express.json());

//
app.get("/users", (request, response) => {
  fs.readFile("./data/ProductData.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }
    const objectData = JSON.parse(readData);

    response.json({
      status: "success",
      data: objectData,
    });
    console.log(objectData);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
