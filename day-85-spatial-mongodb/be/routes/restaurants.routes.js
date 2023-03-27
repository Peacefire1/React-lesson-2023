const { Router } = require("express");

const { getRestaurants } = require("../controller/restaurant.controller");
const route = Router();

route.get("/restaurants", getRestaurants);

module.exports = route;
