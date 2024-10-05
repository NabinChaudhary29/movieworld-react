import React,{ useEffect, useState } from 'react'
import './App.css'
import Hero from './components/HeroComponent'
import { Display } from './components/DisplayComponent';
import { storeInLocalSession } from './utils/localStorage';
import { storeFromLocalSession } from './utils/localStorage';


function App() {
  
  const [movieList, setMovieList] = useState([]);

  useEffect (() => {
    const myList = storeFromLocalSession ();
    myList.length  && setMovieList (myList);
  }, [])

    const addMovieToList = (movie) =>{
      const tempMovie = movieList.filter((item )=> item.imdbID !== movie.imdbID);
    setMovieList([ ...tempMovie,movie ]); 
    storeInLocalSession(...tempMovie,movie);
    };
    const handleOnDeleteMovie = (imdbId) => {
      confirm("Are you sure, you want to delete this movie form the list") &&
        setMovieList(movieList.filter((mv) => mv.imdbID !== imdbId));
    };

  return (
    <div className='wrapper'>
      {/* hero section */}
        <Hero addMovieToList={addMovieToList}/>

      {/* dispaly section */}
        <Display movieList={movieList} handleOnDeleteMovie={handleOnDeleteMovie}/>
      
    </div>
  )
}

export default App
