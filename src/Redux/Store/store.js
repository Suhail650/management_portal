import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlice";
import studentReducer from"../Slices/StudentsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    students: studentReducer,
  },
});

export default store;