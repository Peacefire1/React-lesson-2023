console.log("day-56 REST API ");

const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { request } = require("http");
const { response } = require("express");

const app = express();
const PORT = 8085;

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send(`<h1>Express REST API</h1>`);
});

app.put("/timer", (request, response) => {
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file read error",
        data: [],
      });
    }
    const savedData = JSON.parse(readData);
    const changedData = savedData.map((e) => {
      if (e.id === request.body.id) {
        (e.title = request.body.title), (e.project = request.body.project);
      }
      return e;
    });
    fs.writeFile(
      "./data/data.json",
      JSON.stringify(changedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "file write error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: changedData,
        });
      }
    );
  });
});

app.post("/timer", (request, response) => {
  const body = request.body;

  const newUser = {
    id: body.id,
    title: body.title,
    project: body.project,
    elapsed: body.elapsed,
  };

  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
        data: [],
      });
    }

    console.log(readData);
    const dataObject = JSON.parse(readData);
    dataObject.push(newUser);

    fs.writeFile(
      "./data/data.json",
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "error during file write",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: dataObject,
        });
      }
    );
  });
});

app.delete("/timer", (request, response) => {
  const body = request.body;
  console.log(body);

  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }
    const readObject = JSON.parse(readData);
    const filterObject = readObject.filter((e) => e.id !== body.timerId);
    fs.writeFile(
      "./data/data.json",
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

app.get("/timer", (request, response) => {
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file not found",
        data: [],
      });
    }

    const timerData = JSON.parse(readData);
    console.log(timerData);
    console.log(typeof timerData);
    response.json({
      status: "success",
      data: timerData,
    });
  });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
