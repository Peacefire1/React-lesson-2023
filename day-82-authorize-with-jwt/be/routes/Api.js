const { request, response } = require("express");
const express = require("express");
const apiRouter = express.Router();
const auth = require("../middleware/auth");

apiRouter.post("/protected", auth, async (request, response, next) => {
  const body = request.body;
  console.log(body);

  response.status(200).json({
    data: "Successfully got the protected route",
  });
});
apiRouter.post("/unprotected", auth, async (request, response, next) => {
  const body = request.body;
  console.log(body);

  response.status(200).json({
    data: "Successfully got the unprotected route",
  });
});

module.exports = apiRouter;
