import { createSlice } from "@reduxjs/toolkit";

const otpSlice = createSlice({
  name: "otp",
  initialState: {
    otpSent: false,
    verified: false
  },
  reducers: {
    sendOtp: (state) => {
      state.otpSent = true;
    },
    verifyOtp: (state) => {
      state.verified = true;
    }
  }
});

export const { sendOtp, verifyOtp } = otpSlice.actions;
export default otpSlice.reducer;
