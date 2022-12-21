import React from 'react';
import './resultcart.css'
import { useMovieContext } from '../context/context';
import { ADD_TO_WATCHED, ADD_TO_WATCHLIST } from '../actiontype';
const Resultcart = ({movie})=> {
    const moviecontext = useMovieContext()
    const storedMovie = moviecontext.watchList?.find((o)=>o.imdbID=== movie.imdbID)
    const storedMoviewatched = moviecontext.watched?.find((o)=>o.imdbID=== movie.imdbID)
    const watchedListDisabled = storedMovie ? true : storedMoviewatched ? true:false
    const watchedDisabled = storedMoviewatched ?true : false

    return ( <div className='result-card'>
        <div className='poster'>
            {movie.Poster?(<img src={movie.Poster}/>):(<div className='filter-poster'></div>)}
        </div>
        <div className='info'>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <div className='controls'>
        <button disabled={watchedListDisabled} className='btn btn-success'onClick={()=>moviecontext.moviedispatch({type:ADD_TO_WATCHLIST,payload:movie})}>add to watchlist</button>
        <button disabled={watchedDisabled} className='btn btn-success'onClick={()=>moviecontext.moviedispatch({type:ADD_TO_WATCHED,payload:movie})}>add to watched</button>
        </div>
        </div>
     
    </div> );
}

export default Resultcart;