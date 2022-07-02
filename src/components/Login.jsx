import React from "react";
import {useDispatch , useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {logedIn , loginLoading , loginError} from "../Redux/Login/action";

export const Login = () => {
    const [email , setEmail] = React.useState("");
    const [password , setPassword] = React.useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {loading , error} = useSelector((state) => state.Auth)

   

    console.log(email , password);
    
    const handleLogin = () => {
          dispatch(loginLoading())
       const body = {email , password}
       fetch(`https://reqres.in/api/login`, {
           method : "POST",
            body : JSON.stringify(body),
            headers: {
               "Content-Type": "application/json"
             }
       })
       .then((res) => res.json())
       .then((res) => {
           if(res.token) {
              dispatch(logedIn(res));
              navigate("/")
           }
       })
       .catch(() => {
            dispatch(loginError());
       })

    }

    if(loading){
        return (
              <h2>Loading....</h2>
        )
     }

     if(error){
        return(
             <h2>Something went wrong...</h2>
        )
     }



      return(
          <div>
                <input type = "text"  placeholder = "Email"
                 value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                 <input type = "text" placeholder = "Password"
                 value = {password} onChange = {(e) => setPassword(e.target.value)}/>
                 <button onClick = {handleLogin}>Login</button>
          </div>
      )
}