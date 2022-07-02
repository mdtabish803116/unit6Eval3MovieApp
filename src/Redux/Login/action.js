const LOGED_IN = "logedIn";
const LOGED_OUT = "logOut";
const LOGEDIN_LOADING = "logedinLoading";
const LOGEDIN_ERROR = "logedinError";
export {LOGED_IN , LOGED_OUT , LOGEDIN_ERROR , LOGEDIN_LOADING}

const logedIn = (payload) => ({
    type : LOGED_IN,
    payload
})

const logedOut = () => ({
    type : LOGED_OUT
})

const loginLoading = () => ({
  type : LOGEDIN_LOADING
 })

  const loginError = () => ({
  type : LOGEDIN_ERROR
   })

export {logedIn , logedOut , loginLoading , loginError}