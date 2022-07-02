import {legacy_createStore as createStore , combineReducers,} from "redux";
import {logedInReducer} from "./Login/reducer";
import {movieReducer} from "./Movie/reducer";
import {bookingReducer} from "./Bookings/reducer";

const rootReducer = combineReducers({
    Auth : logedInReducer,
    movies : movieReducer
})


export const store = createStore(rootReducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(() => {
    console.log(store.getState());
  })
 
