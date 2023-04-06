import { Router } from "express";
import { getMovies } from "../controllers/movies-controller";

const moviesRouter = Router();

moviesRouter.get("/list", getMovies);
// moviesRouter.get("/byId/:id", getTheaterById);
// moviesRouter.get("/search", searchTheaters);

export default moviesRouter;
