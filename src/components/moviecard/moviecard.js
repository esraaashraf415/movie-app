import React from "react";
import './moviecart.css'
import Moviecontrol from "../moviecontrol/moviecontrol";
function Moviecard({movie,type}) {
    return ( <div className="movie-card"><div className="overlay"></div> <img src={movie.Poster} alt={movie.Poster}/><Moviecontrol movie={movie} type={type}/></div> );
}

export default Moviecard;