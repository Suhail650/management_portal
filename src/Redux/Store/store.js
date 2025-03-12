import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlice";
import vouchReducer from "../Slices/VoucherSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    Voucher: vouchReducer
  },
});

export default store;