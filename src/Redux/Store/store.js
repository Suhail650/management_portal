import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlice";
import institutionReducer from "../Slices/InstitutionSlice";
import voucherReducer from "../Slices/VoucherSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    institution: institutionReducer,
    Voucher: voucherReducer
  },
});

export default store;
