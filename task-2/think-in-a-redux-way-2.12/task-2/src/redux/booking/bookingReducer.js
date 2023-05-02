import { ADD,DELETE } from "./actionTypes";

const initialState = [];

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return [
                ...state, 
                { 
                    destinationFrom: action.payload.destinationFrom, 
                    destinationTo: action.payload.destinationTo,
                    journeyDate:action.payload.journeyDate,
                    Guests: action.payload.Guests,
                    Class: action.payload.Class 
                }
            ];
        case DELETE:
            return state.filter((input, index) => index !== action.payload);

        default:
            return state;
    }
};

export default bookingReducer;