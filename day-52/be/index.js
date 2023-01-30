const { request, response } = require("express");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.delete("/users", (request, response) => {
  const body = request.body;

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const readObject = JSON.parse(readData);
    const filterObject = readObject.filter((o) => o.id !== body.userId);
    fs.writeFile(
      "./data/users.json",
      JSON.stringify(filterObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "write file error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: filterObject,
        });
      }
    );
  });
});

app.get("/users", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
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
  });
});

app.post("/users", (request, response) => {
  const body = request.body;
  console.log(body);

  const newUser = {
    id: Date.now().toString(),
    username: body.username,
    age: body.age,
  };
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
        data: [],
      });
    }

    console.log(readData);

    const dataObject = JSON.parse(readData);
    console.log(dataObject);
    dataObject.push(newUser);
    console.log(dataObject);

    fs.writeFile(
      "./data/users.json",
      JSON.stringify(dataObject),
      (writeErrow) => {
        if (writeErrow) {
          response.json({
            status: "error during file write",
            data: [],
          });
        }
        response.json({
          status: "succes",
          data: dataObject,
        });
      }
    );
  });
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:8080");
});
