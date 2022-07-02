import React from "react";
import {useParams} from "react-router-dom";

export const MovieDetails = ()=> {
      const {id} = useParams();
      const [movie , setMovie] = React.useState({})

      const getMovie = ()=>{
        fetch(`http://localhost:8080/movies/${id}`) 
        .then((res) => res.json())
        .then((res) => setMovie(res))
        .catch((error)=> console.log(error))
    }

    React.useEffect(()=>{
           getMovie();
    }, [id])


      return(
          <div style = {{
                 width : "300px",
                   height : "400px",
                   border : "2px solid red"


          }}>
    
                    <div>
                    <img src = {movie.poster_path} width = "100%"/>
                  </div>
                 <div>Title{" : "}{movie.title}</div>
                 <div>ReleaseDate{" : "}{movie.release_date}</div>
                 
                  <div>Book</div>
                      
          </div>
      ) 
}