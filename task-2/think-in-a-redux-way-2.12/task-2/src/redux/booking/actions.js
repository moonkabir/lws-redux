import { ADD,DELETE } from "./actionTypes";

export const add = (formData) => {
    return {
        type: ADD,
        payload:{
            destinationFrom:formData.from,
            destinationTo:formData.to,
            journeyDate:formData.date,
            Guests:formData.guests,
            Class:formData.ticketClass
        }
    };
};

export const booking_delete = (id) => {
    return {
        type: DELETE,
        payload:id
    };
};