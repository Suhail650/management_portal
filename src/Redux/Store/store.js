import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../Slices/AuthSlice";
import institutionReducer from "../slices/InstitutionSlice";
import studentReducer from "../slices/StudentsSlice";
import voucherReducer from "../Slices/VoucherSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    institution: institutionReducer,
    Voucher: voucherReducer,
    students: studentReducer,
  },
});

export default store;
