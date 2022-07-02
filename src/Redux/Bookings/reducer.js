import {TICKET_BOOKED , BOOKING_DETAILS} from "./action";


const bookingReducer = (store = {Booked : false , BookingDetails : []} , {type , payload}) => {
        switch(type){
              case TICKET_BOOKED:
                 return{
                       ...store, Booked : true
                 }
                
              case BOOKING_DETAILS:
                  return { 
                      ...store, BookingDetails : [...store.BookingDetails , payload]
                  }
        }     
}