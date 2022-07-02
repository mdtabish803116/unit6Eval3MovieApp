import {LOGED_IN , LOGED_OUT , LOGEDIN_LOADING , LOGEDIN_ERROR} from "./action";

export const logedInReducer = (store = {logedIn : false , token : "" , loading : false , error : false} , {type , payload}) => {
      switch(type){  
       case LOGED_IN:
         localStorage.setItem("userAuth" , JSON.stringify({
              logedIn : true, 
              token : payload.token
         }))
          return {
               ...store , logedIn : true , token : payload.token,
               loading : false,
               error : false,
          }
        case LOGED_OUT:
            const userAuth = JSON.parse(localStorage.getItem("userAuth"))
              if(userAuth != null){
                localStorage.removeItem("userAuth")
              }
            return {
                ...store, logedIn : false , token : "", 
                loading : false,
                error : false,
            }
         case LOGEDIN_LOADING :
            return {
                ...store , 
                loading : true, 
                error : false

            }
         case LOGEDIN_ERROR :
              return {
                  ...store , 
                  error : true,
                  loading : false
              }

          default : 
            return store
      }

}