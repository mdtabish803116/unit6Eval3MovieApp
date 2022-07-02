import React from "react";
import {Link} from "react-router-dom";
import {useSelector , useDispatch} from "react-redux";
import {logedOut} from "../Redux/Login/action";

export const Navbar = () => {
  
    const {logedIn , token} = useSelector((state) => state.Auth);
    const dispatch = useDispatch();
  
    return(
          <div style = {{
             display :"flex",
             justifyContent :"space-around",
             height : "60px",
              alignItems : "center",
              fontSize : "20px",
              background : "teal"
          }}>
                <Link style = {{
                      textDecoration : "none",
                       fontSize : "20px",
                       color : "white"
                       
                }} to = "/">Home</Link> 
                <Link  style = {{
                      textDecoration : "none",
                       fontSize : "20px",
                       color : "white"
                       
                }}  to ="/bookings">Bookings</Link>
                <Link   style = {{
                      textDecoration : "none",
                       fontSize : "20px",
                       color : "white"
                       
                }} to = "/login" onClick = {() => dispatch(logedOut())}>{logedIn ? "Logout" : "login"}</Link>

                 <span style = {{
                      color : "white"
                 }}>{logedIn ? ("User's Id: " + token):null}</span>
          </div>
    )
}