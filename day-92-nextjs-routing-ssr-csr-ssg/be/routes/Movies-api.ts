import { Router } from "express";
import { getDetails, getMovies } from "../controllers/movies-controller";

const moviesRouter = Router();

moviesRouter.get("/list", getMovies);
moviesRouter.get("/details/:id", getDetails);
// moviesRouter.get("/byId/:id", getTheaterById);
// moviesRouter.get("/search", searchTheaters);

export default moviesRouter;
