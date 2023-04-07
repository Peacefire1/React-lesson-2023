import moviesModel from "../models/movies.model";
import { Request, Response } from "express";

export const getMovies = async (req: Request, res: Response) => {
  const page: number = Number(req.query.page) || 0;
  const moviesPerPage: number = Number(req.query.moviesPerPage) || 25;
  try {
    const movies = await moviesModel
      .find({})
      .limit(moviesPerPage)
      .skip(moviesPerPage * page);
    res.status(200).json(movies);
  } catch (error) {
    console.log("aldaa");
    res.status(404).json({ data: [] });
  }
};
export const getDetails = async (req: Request, res: Response) => {
  // const page: number = Number(req.query.page) || 0;
  // const deatailsPage: number = Number(req.query.deatailsPage) || 25;
  const { id } = req.params;
  try {
    const details = await moviesModel.findOne({ _id: id });
    res.status(200).json(details);
  } catch (error) {
    console.log("aldaa");
    res.status(404).json({ data: [] });
  }
};
