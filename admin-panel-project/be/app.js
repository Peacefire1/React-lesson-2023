import express, { request, response } from "express";
import role_rout from "./routes/userRole.js";

import cors from "cors";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors);
app.use(role_rout);

app.get("/", (request, response) => {
  response.send("<h1>Role</h1>");
});

app.listen(PORT, () => {
  console.log(`Express App is running on http://localhost:${PORT}`);
});
