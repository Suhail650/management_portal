import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlice";
import institutionReducer from "../slices/InstitutionSlice";
import voucherReducer from "../Slices/VoucherSlice";
import studentReducer from "../slices/StudentsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    institution: institutionReducer,
    Voucher: voucherReducer,
    students: studentReducer,
  },
});

export default store;
