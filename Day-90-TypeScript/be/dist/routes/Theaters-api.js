"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const theater_controller_1 = require("../controllers/theater-controller");
const theaterRouter = (0, express_1.Router)();
theaterRouter.get("/list", theater_controller_1.getTheaters);
theaterRouter.get("/byId/:id", theater_controller_1.getTheaterById);
theaterRouter.get("/search", theater_controller_1.searchTheaters);
exports.default = theaterRouter;
