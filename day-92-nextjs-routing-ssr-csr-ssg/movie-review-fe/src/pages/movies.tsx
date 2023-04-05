import NavigationBar from '@/components/navigation.bar'
import React, { useEffect, useState } from 'react'



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




const URL = "http://localhost:8080/theater/list"
const Theaters =():JSX.Element => {
  const [movies, setMovies] = useState<IMovies[]>([])
  const moviesList = async():Promise<void>=>{
    const FETCHED_DATA = await fetch(URL)
    const FETCHED_JSON = await FETCHED_DATA.json()
    setMovies(FETCHED_JSON)
    console.log(FETCHED_JSON);
  }
  useEffect(() =>{
    moviesList()
  },[])
  
  return (
    <div>
      <NavigationBar/>
      <h1>Theater list</h1>
      {/* {theater.map((e:ITheater)=>
          
          <p key={e.theaterId}>
            {e.theaterId}
          </p>
        
      )} */}

   
    </div>
  )
}

export default Theaters