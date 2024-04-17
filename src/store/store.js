import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobSlice";

const Store = configureStore({
  reducer: {
    job: jobReducer,
  },
});

export default Store;
