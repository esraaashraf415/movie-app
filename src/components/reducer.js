
import { ADD_TO_WATCHLIST,REMOVE_FROM_WATCHLIST,REMOVE_FROM_WATCHED,ADD_TO_WATCHED,MOVE_TO_WATCHLIST } from './actiontype'

export const reducer = (state,action)=>{
    switch(action.type){
case ADD_TO_WATCHLIST:
    return{
        ...state,
        watchList:[action.payload,...state.watchList]
    }
    case REMOVE_FROM_WATCHLIST:
    return{
        ...state,
        watchList:state.watchList.filter((movie)=>movie.imdbID!==action.payload)
    }
    case MOVE_TO_WATCHLIST:
        return{
            ...state,
            watched:state.watched.filter(
                (movie)=>movie.imdbID!==action.payload.imdbID)
,  watchList:[action.payload,...state.watchList]

        }
        case REMOVE_FROM_WATCHED:
            return{
                ...state,
                watched:state.watched.filter((movie)=>movie.imdbID!==action.payload)

    
            }
            case ADD_TO_WATCHED:
    return{
        ...state,
        watchList:state.watchList.filter((movie)=>movie.imdbID!==action.payload.imdbID),
        watched:[action.payload,...state.watched]
    }
            
         default:
            return state   
    }
}