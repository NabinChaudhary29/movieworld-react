import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCardComponent'


export const Display = ({movieList}) => {
  const [displayList,setDisplayList] = useState ([]);

  useEffect(()=>{ setDisplayList(movieList)},[movieList])
  const handleOnFilter = (mood) => {
    alert(mood);
  }
  return (
    <div className="container mt-5 rounded">
      <div className="bg-dark p-3">
        <div className="row">
          <div className="col">
            <div className="btn-group" role="group" aria-label="Basic example">
            <button 
            onClick={()=>handleOnFilter("All")}
            type="button" className="btn btn-primary">All</button>
            <button 
            onClick={()=>handleOnFilter("Drama")}
            type="button" className="btn btn-warning">Drama</button>
            <button 
            onClick={()=>handleOnFilter("Action")}
            type="button" className="btn btn-info">Action</button>
          </div>
          <div className='mt-3 text-light'>2 movies listed</div>
        </div>
        </div>

          <div className="row mt-5">
            <div className="col d-flex justify-content-around gap-2 flex-wrap">
              {
                  movieList.map((item,i)=>(
                    <div className="" key={i}>
                      <MovieCard searchedMovie={item}/>
                      </div>
                  ))
              }
            </div>
        </div>
      </div>
    </div>
  );
};
