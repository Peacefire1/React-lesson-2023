import NavigationBar from "@/components/navigation.bar";
import React, { useEffect, useState } from "react";
import styles from "@/styles/navigation.module.css";
import Link from "next/link";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

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

const URL = "http://localhost:8080/movies/list";
const Theaters = (): JSX.Element => {
  const [movies, setMovies] = useState<IMovies[]>([]);
  const moviesList = async (): Promise<void> => {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setMovies(FETCHED_JSON);
    console.log(FETCHED_JSON);
  };
  useEffect(() => {
    moviesList();
  }, []);

  async function sendPage(page: any) {
    const URL = `http://localhost:8081/movies/list?page=${page}`;
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setMovies(FETCHED_JSON);
  }
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    sendPage(value);
    setPage(value);
  };

  return (
    <div className="container mx-auto">
      <NavigationBar />
      <h1>Theater list</h1>
      <div className="flex flex-wrap gap-1 justify-between ">
        {movies.map((e: IMovies) => (
          <div className="align-center basis-2/12 hover:cursor-pointer">
            <img
              className={"m-2 rounded-lg h-1" + styles.image}
              src={!e.poster ? "/naruto.jpeg" : e.poster}
              alt=""
            />
            <h4>{e.genres}</h4>
            <Link href={"http://localhost:3000/details/" + e._id}>
              <h3>{e.title}</h3>
            </Link>
            <p key={e.year}>{e.year}</p>
          </div>
        ))}
      </div>
      <Stack spacing={2} className='text-center mx-96 m-5 '>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
};

export default Theaters;
