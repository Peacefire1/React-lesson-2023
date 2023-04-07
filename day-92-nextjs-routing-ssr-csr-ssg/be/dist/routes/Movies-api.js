"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movies_controller_1 = require("../controllers/movies-controller");
const moviesRouter = (0, express_1.Router)();
moviesRouter.get("/list", movies_controller_1.getMovies);
// moviesRouter.get("/byId/:id", getTheaterById);
// moviesRouter.get("/search", searchTheaters);
exports.default = moviesRouter;