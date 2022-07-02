import {Home} from "./components/Home";
import {Login} from "./components/Login"
import {Navbar} from "./components/Navbar";
import {Bookings} from "./components/Bookings";
import {Routes , Route} from "react-router-dom";
import React from "react";
import {useDispatch} from "react-redux";
import {logedOut , logedIn} from "./Redux/Login/action";
import {MovieDetails} from "./components/movie/MovieDetails"

function App() {

  const dispatch = useDispatch();
React.useEffect(() => {
    const userAuth = JSON.parse(localStorage.getItem("userAuth"))
     if(userAuth === null){
        dispatch(logedOut());
     }else {
         dispatch(logedIn(userAuth))
     }
} , [dispatch])

  return (
    <div>
            <Navbar />
         <Routes>
                <Route path = "/" element = {<Home />}></Route>
                <Route path = "/login" element = {<Login />}></Route>
                <Route path = "/movie:/id" element = {<MovieDetails />}></Route>
                <Route path = "/bookings" element = {<Bookings />}></Route>
         </Routes>
    </div>
  );
}

export default App;
