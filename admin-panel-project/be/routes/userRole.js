import express from "express";

import { getRoles } from "../services/userRoleService.js";
const role_rout = express.Router();

role_rout.get("/user_role", async (request, response) => {
  const result = await getRoles();
  response.status(200).send(result);
});

export default role_rout;
