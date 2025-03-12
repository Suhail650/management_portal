import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlice";
import institutionReducer from "../Slices/InstitutionSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    institution: institutionReducer,
  },
});

export default store;
