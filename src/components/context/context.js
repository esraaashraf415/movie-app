import {  createContext, useContext, useReducer ,useEffect} from "react";
import { reducer } from "../reducer";
const initialState = {
    watchList:localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')): [],
    watched:localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')): [],
    
}
export const globalContext = createContext(initialState)

const ContextProvider = ({children})=>{
    const [state,dispatch]= useReducer(reducer,initialState)
    useEffect(()=>{
     localStorage.setItem('watchlist',JSON.stringify(state.watchList))
     localStorage.setItem('watched',JSON.stringify(state.watched))

    },[state]

    )
    return<globalContext.Provider value={{watchList:state.watchList, watched:state.watched,moviedispatch:dispatch,}}>
        {children}
    </globalContext.Provider>
}
export default ContextProvider
export const useMovieContext = ()=>{
    return useContext(globalContext)
}