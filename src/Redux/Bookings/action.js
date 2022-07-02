export const TICKET_BOOKED = "ticketBooked";
export const BOOKING_DETAILS = "bookingDetails";

export const ticketBooked = () => ({
        type : TICKET_BOOKED,
})

export const bookingDetails = (payload) => ({
        type : BOOKING_DETAILS,
        payload
})