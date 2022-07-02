import React from "react";
import {useDispatch , useSelector} from "react-redux";
import {getAllMovies , movieLoading , movieError} from "../../Redux/Movie/action"
import {Link} from "react-router-dom";
export const Movie = () => {
    const dispatch = useDispatch();
      const getFetchMovie = () => {
             dispatch(movieLoading())
           fetch(" http://localhost:8080/movies")
           .then((res) => res.json())
           .then((res) => dispatch(getAllMovies(res)))
           .catch((err) => dispatch(movieError()))
      }

    React.useEffect(() => {
             getFetchMovie()
    } , [dispatch])

    const {movies , loading , error } = useSelector((state) => state.movies)

     return(
          <div style = {{
                display : "grid",
                gridTemplateColumns : "repeat(4 , 1fr)",
                gap : "30px",
                marginTop : "100px"
          }}>
                {
                      movies.map((movie) => (
                          <div key = {movie.id} style = {{
                               border : "2px solid teal",
                               textAlign : "center",
                          }}>
                                <div>
                                       <img src = {movie.poster_path} width = "100%"/>
                                </div>
                                <div>Title{" : "}{movie.title}</div>
                                 <div>ReleaseDate{" : "}{movie.release_date}</div>
                                 <Link to ="/movie/${movie.id}">More Details</Link>
                          </div>
                      ))
                }
          </div>
     )
}