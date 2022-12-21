import React from "react";
import Moviecard from "../moviecard/moviecard";
import { useMovieContext } from "../context/context";
import './watchlist.css'
function WatchList() {
    const movieContext = useMovieContext()

    return ( <div className="watch-list">
        <div className="container">
            <div className="main-heading">
                <h1>my watchlist</h1>
                <span className="movie-count">{movieContext.watchList.length } {movieContext.watchList.length === 1? 'movie' :'movies'} </span>
            </div>
{movieContext.watchList?.length > 0 ? (<div className="movie-grid">{movieContext.watchList.map((movie)=>(<Moviecard key={movie.imdbID} movie={movie} type="watchlist"/>))}</div>):<h2 className="no-movie">No movies</h2>}
        </div>
    </div> );
}

export default WatchList;