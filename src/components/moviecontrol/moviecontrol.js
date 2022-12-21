import React from "react";
import { ADD_TO_WATCHED, ADD_TO_WATCHLIST, MOVE_TO_WATCHLIST, REMOVE_FROM_WATCHED, REMOVE_FROM_WATCHLIST } from "../actiontype";
import { useMovieContext } from "../context/context";
import './control.css'
function Moviecontrol({movie,type}) {
    const moviecontext = useMovieContext()

    return ( <div className="inner-card-controls">

        {type === "watchlist" && (

            <>
            <button className="control-btn" onClick={()=>moviecontext.moviedispatch({type:ADD_TO_WATCHED,payload:movie})}><i className="fa-solid fa-eye"/></button>
            <button className="control-btn" onClick={()=>moviecontext.moviedispatch({type:REMOVE_FROM_WATCHLIST,payload:movie.imdbID})}><i className="fa-fw fa fa-times"/></button>

            </>
        )}
               {type === "watched" && (

<>
<button className="control-btn" onClick={()=>moviecontext.moviedispatch({type:MOVE_TO_WATCHLIST,payload:movie})}><i className='fa-solid fa-eye-slash'></i>

</button>
<button className="control-btn" onClick={()=>moviecontext.moviedispatch({type:REMOVE_FROM_WATCHED,payload:movie.imdbID})}><i className="fa-fw fa fa-times"/></button>

</>
)}
    </div> );
}

export default Moviecontrol;