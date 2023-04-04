import mongoose, { Schema, Date } from "mongoose";

interface IMovies {
  plot: string;
  genres: [string];
  runtime: number;
  cast: [string];
  poster: string;
  title: string;
  fullpot: string;
  languages: [string];
  released: Date;
  directors: [string];
  rated: string;
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };
  lastupdated: Date;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  countries: [string];
  type: string;
  tomatoes: {
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    fresh: number;
    critic: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    rotten: number;
    lastUpdated: Date;
  };
  num_mflix_comments: number;
}

const MoviesSchema: Schema = new Schema({});

export default mongoose.model<IMovies>("Movies", MoviesSchema);
