console.log("Day-62 - User Login Crud");

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 8080;
const SALT_ROUNDs = 10;

app.use(cors());
app.use(express.json());

app.post("/register", (request, response) => {
  const body = request.body;
  console.log(body);

  //fs read from users json

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

      const userPassword = body.password;

      bcrypt.genSalt(SALT_ROUNDs, (err, salt) => {
        if (err) {
          response.json({
            status: "generating salt error",
          });
        }

        bcrypt.hash(userPassword, salt, (hashError, hashData) => {
          if (hashError) {
            response.json({
              status: "hashing has error",
              data: [],
            });
          }

          console.log("Hashed Data", hashData);

          const newUser = {
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            password: hashData,
            address: body.address,
            role: roleName,
          };
          readDataObj.push(newUser);
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

      //   console.log(role);

      const userData = {
        ...body,
        role: roleName,
      };
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

/// API get all logins

app.post("/login", (request, response) => {
  const body = request.body;

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file read error",
        data: [],
      });
    }
    const usersArrayObj = JSON.parse(readData);

    const foundUser = usersArrayObj.filter((user) => body.email === user.email);
    if (foundUser.length === 0) {
      response.json({
        status: "User not found",
        data: [],
      });
    } else {
      const foundUserObj = foundUser[0];

      console.log(foundUserObj);

      if (foundUserObj.password === body.password) {
        response.json({
          status: "Username or Password do not match!!",
        });
      } else {
        response.json({
          status: "success",
          data: {
            email: foundUserObj.email,
            firstName: foundUserObj.firstname,
            lastName: foundUserObj.lastname,
          },
        });
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
