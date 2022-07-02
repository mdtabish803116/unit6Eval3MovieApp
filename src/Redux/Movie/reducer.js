import {GET_ALL_MOVIES , MOVIE_LOADING , MOVIE_ERROR} from "./action";

export const movieReducer = (store = {movies : [] , loading : false , error : false} , {type , payload}) => {
      switch(type){
          case GET_ALL_MOVIES:
              return {
                    ...store , movies : payload,
                    loading : false,
                    error : false
              }
        case MOVIE_LOADING:
            return{
                  ...store,
                  loading : true, 
                  error : false, 
                  movies : []
            }

        case MOVIE_ERROR:
              return {
                ...store,
                loading : false, 
                error : true, 
                movies : []
              }

          default : 
            return store
      }
}