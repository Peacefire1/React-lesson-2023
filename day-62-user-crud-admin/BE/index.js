console.log("Day-62 - User Login Crud");

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { response } = require("express");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.post("/register", (request, response) => {
  const body = request.body;
  console.log(body);

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file read error",
        data: [],
      });
    }
    const readDataObj = JSON.parse(readData);
    console.log(readDataObj);

    fs.readFile("./data/userrole.json", "utf-8", (readError, readData) => {
      if (readError) {
        response.json({
          status: "file read error",
          data: [],
        });
      }
      const roleData = JSON.parse(readData);
      const roleName = roleData.filter((role) => role.id === body.role)[0];
      //   console.log(role);

      const userData = {
        ...body,
        role: roleName,
      };
      readDataObj.push(userData);

      fs.writeFile(
        "./data/users.json",
        JSON.stringify(readDataObj),
        (writeError) => {
          if (writeError) {
            response.json({
              status: "file write error",
            });
          }
          response.json({
            status: "success",
            data: readDataObj,
          });
        }
      );
    });
  });
});

/// API get all users

app.get("/users", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file read error",
        data: [],
      });
    }
    response.json({
      status: "success",
      data: JSON.parse(readData),
    });
  });
});

/// API get all user roles

app.get("/users/roles", (request, response) => {
  fs.readFile("./data/userrole.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
      });
    }
    response.json({
      status: "success",
      data: JSON.parse(readData),
    });
  });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
