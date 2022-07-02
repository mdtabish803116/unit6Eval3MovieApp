export const GET_ALL_MOVIES = "getAllMovies";
export const MOVIE_LOADING = "movieLoading";
export const MOVIE_ERROR = "movieError";

export const getAllMovies = (payload) => ({
       type : GET_ALL_MOVIES,
       payload
})

export const movieLoading = () => ({
    type : MOVIE_LOADING,
})

export const movieError = () => ({
    type : MOVIE_LOADING,
    
})

