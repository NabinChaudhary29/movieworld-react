import React from 'react'

export default function Hero() {

  const movieStyle = {
    backgroundImage:`url(https://www.omdbapi.com/src/poster.jpg)`,
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

        <div className="form-center">
          <div className="text-center">
            <h1>Search Millons of Movies</h1>
            <p>Find about the movie more in details before watching them ......</p>
          </div>
        </div>
        <div className="input-group my-5">
            <input type="text" 
            className="form-control"
            placeholder="Movie Name" 
            aria-label="Recipient's username" 
            aria-describedby="button-addon2"/>
            <button className="btn btn-danger" 
            type="button" 
            id="button-addon2">Button</button>
        </div>

        </div>

      </div>

    </>
  )
}
