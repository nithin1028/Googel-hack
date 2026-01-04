import { createSlice } from "@reduxjs/toolkit";

const travelSlice = createSlice({
  name: "travel",
  initialState: {
    bookings: []
  },
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    }
  }
});

export const { addBooking } = travelSlice.actions;
export default travelSlice.reducer;
