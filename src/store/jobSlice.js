import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobslice",
  initialState: [],
  reducers: {
    addjobsData_Cart: (state, action) => {
      return action.payload;
    },
  },
});

export default jobSlice.reducer;
export const { addjobsData_Cart } = jobSlice.actions;
