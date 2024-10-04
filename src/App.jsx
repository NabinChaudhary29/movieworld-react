import React,{ useState } from 'react'
import './App.css'
import Hero from './components/HeroComponent'
import { Display } from './components/DisplayComponent';


function App() {
  
  const [movieList, setMovieList] = useState([]);

    const addMovieToList = (movie) =>{
      const tempMovie = movieList.filter((item )=> item.imdbID !== movie.imdbID);
    setMovieList([ ...tempMovie,movie ]); 
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
