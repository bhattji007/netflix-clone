import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url="https://image.tmdb.org/t/p/original";


function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");
    // a snippet of code which runs on a specific condition when row loads useEffect will ruhn
useEffect(()=>{
    // if [ ] are empty then its means run once and dont run again
    async function fetchData(){
        const request = await axios.get(fetchUrl)
        // console.log(request.data.results); 
        setMovies(request.data.results);
        return request;         
    }
    fetchData();
},[fetchUrl]);
// when a variable is passed on outside of a block in useEffects the the vaible becomes the dependency of the useEffects
  const opts={
    height:"390",
    width:"100%",
    playerVars:{
      autoplay:1,
    },
  };
  const handleClick=(movie)=>{
    if(trailerUrl){
      setTrailerUrl('');
    }
    else{
      movieTrailer(movie?.name|| "")
      .then(url=>{
        const urlParams=new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      }).catch(error=> console.log(error))
    }

  }
  
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='movie_posters'>
        {movies.map(movie=>(
            <img className={`row_poster ${isLargeRow && "row_poster_large"}`}
            onClick={()=> handleClick(movie)}
            key= {movie.id}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
              alt={movie.name} />
        ))}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row