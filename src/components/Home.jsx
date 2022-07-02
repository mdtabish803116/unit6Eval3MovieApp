import {Movie} from "./movie/Movie"
import {useSelector} from "react-redux";
import React from "react";

export const Home = ()=> {
    const {logedIn} = useSelector((state) => state.Auth);

    return(
        logedIn?( <Movie />):(<h1>Home page</h1>)
    )
}