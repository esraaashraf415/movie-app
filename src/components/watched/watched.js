import React from 'react';
import { useMovieContext } from '../context/context';
import Moviecard from '../moviecard/moviecard';
import './watched.css'
function Watched() {
    const movieContext = useMovieContext()

    return ( <div className="watch-list">
        <div className="container">
            <div className="main-heading">
                <h1>my watched</h1>
                <span className="movie-count">{movieContext.watched.length } {movieContext.watched.length === 1? 'movie' :'movies'}</span>
            </div>
{movieContext.watched?.length > 0 ? (<div className="movie-grid">{movieContext.watched.map((movie)=>(<Moviecard key={movie.imdbID} movie={movie} type="watched"/>))}</div>):<h2 className='no-movie'>No movies</h2>}
        </div>
    </div> );}

export default Watched;