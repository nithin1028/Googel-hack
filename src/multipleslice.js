import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Redux";
import otpReducer from "./reduxslice";
import travelReducer from "./travel";

const store = configureStore({
  reducer: {
    user: userReducer,
    otp: otpReducer,
    travel: travelReducer
  }
});

export default store;
