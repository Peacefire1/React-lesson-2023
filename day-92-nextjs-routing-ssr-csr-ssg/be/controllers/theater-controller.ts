import theatersModel from "../models/theaters.model";
import { Request, Response } from "express";

export const getTheaters = async (req: Request, res: Response) => {
  const page: number = Number(req.query.page) || 0;
  const moviesPerPage: number = Number(req.query.moviesPerPage) || 5;
  try {
    const theaters = await theatersModel
      .find({})
      .limit(moviesPerPage)
      .skip(moviesPerPage * page);
    res.status(200).json(theaters);
  } catch (error) {
    console.log("aldaa");
    res.status(404).json({ data: [] });
  }
};

export const getTheaterById = async (req: Request, res: Response) => {
  try {
    const theater = await theatersModel.find({
      theaterId: Number(req.params.id),
    });
    res.status(200).json(theater);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};

export const searchTheaters = async (req: Request, res: Response) => {
  try {
    console.log(req.query.keyword);

    const city = await theatersModel.find({
      "location.address.city": req.query.keyword,
    });
    res.status(200).json(city);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};
