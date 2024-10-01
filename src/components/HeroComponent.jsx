import React, {useEffect, useRef, useState} from 'react'
import MovieCard from './MovieCardComponent';
import { fetchFromAPI } from '../utils/axios';
import { randomChar } from '../utils/ramdom';

export default function Hero() {

  const [searchedMovie, setSearchedMovie] = useState({})
  const [bgImg, setBgImg] = useState("")
  const shouldFetchRef = useRef(true)
  const searchRef = useRef("")
  const [searching, setSearching] = useState (false)

 useEffect (() =>{
  if(shouldFetchRef.current){
    fetchMovie (randomChar());
    shouldFetchRef.current = false;
  
  }},[]);

  const fetchMovie = async str => {
    const movie  = await fetchFromAPI(str);
    setSearchedMovie(movie);
    setBgImg(movie.Poster);
    setSearching(false);

  }
  const handleOnMovieSearch = () => {
    const str = searchRef.current.value;
    fetchMovie(str);
    searchRef.current.value = "";
  }

  const handleOnDelete = () => {
    setSearchedMovie({})
    setSearching(true)
  }

  const movieStyle = {
    backgroundImage:`url(${bgImg})`,
    backgroundRepeat:"no-repeat",
    bcakgroundPostion:"center",
    backgroundSize:"cover",
    height:"60vh",
  };

  return (
      <>
      <nav className='py-2 text-danger fixed-top'>
        <h1 className='container'>MovieWorld</h1>
      </nav>
      <div className="hero d-flex justify-content-center align-items-center text-light" style={movieStyle}>

        <div className='hero-content'>
        <div className={searching ? "form-center" : "form-top"}>
          {searching && (
              <div className="text-center">
                <h1>Search Millons of Movies</h1>
                <p>Find about the movie more in details before watching them ......</p>
            </div>
          
         )}
            <div className="input-group my-5">
            <input 
            ref={searchRef}
            onFocus={() => setSearching (true)}
            type="text" 
            className="form-control"
            placeholder="Movie Name" 
            aria-label="Movie Name" 
            aria-describedby="button-addon2"/>
            <button 
            onClick={handleOnMovieSearch}
            className="btn btn-danger" 
            type="button" 
            id="button-addon2">Search</button>
            </div>
        </div>

        {!searching && (

          <div className='movie-card-display showMovie'>
              <MovieCard searchedMovie={searchedMovie} deleteFunc = {handleOnDelete}/>
          </div>
          )}

        </div>

      </div>

    </>
  )
}
