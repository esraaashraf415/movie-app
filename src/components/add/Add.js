import axios from "axios";
import React ,{ useEffect, useState }from "react";
import Resultcart from "../result-cart/result-cart";

import './add.css'
function Add () {
    const [searchValue,setSerchValue] = useState("")
    const [movies,setMovies] = useState([])
    useEffect( ()=>{
      axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=979f897`)
      .then(res=>{
        if(res.data.Search) {
    setMovies(res.data.Search)
}     })
         .catch((error)=>console.log(error))
    
     },[searchValue])
 
  
    return ( 
    <div className="add-page">
<div className="container">
    <div className="add-content">
        <div className="input-container">
            <input type="text" placeholder="search for a movie" onChange={(e)=>{setSerchValue(e.target.value)}} value={searchValue}/>
        </div>
{movies.length >0 && <ul className="result">
    {movies.map((movieItem)=>(<li key={movieItem.imdbID}><Resultcart movie={movieItem}/></li>))}
    </ul>}

    </div>
</div>
    </div> )

    }

export default Add;