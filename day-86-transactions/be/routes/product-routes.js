const { Router } = require("express");

const { createProducts } = require("../controllers/product-controller");
const route = Router();

route.post("/create", createProducts);

module.exports = route;
