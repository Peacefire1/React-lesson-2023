import NavigationBar from "@/components/navigation.bar";
import Image from "next/image";
import React from "react";


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

  const URL = "http://localhost:8080/movies/details/"



export default function Detail ({movie}:{movie:any}){
    return (<div>
        <NavigationBar/>

        <Image src={movie.poster} alt="poster"
        width={300}
        height={300}
        />
        <h1>{movie.title}</h1><br />
        <p>{movie.fullplot}</p>
        


        
    </div>)
}

export async function getServerSideProps(req:any){
    
    const {details} = req.params
    console.log(req.params);
    const FETCHED_DATA = await fetch(URL+details)
        const FETCHED_JSON = await FETCHED_DATA.json()
        console.log(FETCHED_JSON);
   
    console.log(details);
    return{

        props:{
            movie:FETCHED_JSON
        }
    }
    
}
