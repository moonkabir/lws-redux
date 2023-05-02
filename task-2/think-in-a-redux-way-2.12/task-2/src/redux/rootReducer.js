import { combineReducers } from "redux";
import bookingReducer from "./booking/bookingReducer";

const rootReducer = combineReducers({
    addBooking: bookingReducer,
});

export default rootReducer;
