import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
  fetchVoucherService,
  approveVoucherService,
  rejectVoucherService,
} from '../../services/voucherService';

// Async thunks
export const fetchVouchers = createAsyncThunk('vouchers/fetchVouchers', async () => {
  const response = await fetchVoucherService();
  return response.data;
});

export const approveVoucher = createAsyncThunk(
  'vouchers/approveVoucher',
  async ({ id, certificateImage }) => {
    const response = await approveVoucherService(id, certificateImage);
    return response.data;
  },
);

export const rejectVoucher = createAsyncThunk('vouchers/rejectVoucher', async (id) => {
  const response = await rejectVoucherService(id);
  return response.data;
});

const voucherSlice = createSlice({
  name: 'voucher',
  initialState: {
    vouchers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVouchers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVouchers.fulfilled, (state, action) => {
        state.loading = false;
        state.vouchers = action.payload;
      })
      .addCase(fetchVouchers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // .addCase(approveVoucher.fulfilled, (state, action) => {
      //   const index = state.vouchers.findIndex((v) => v.id === action.payload.id);
      //   if (index !== -1) state.vouchers[index] = action.payload;
      // })
      .addCase(approveVoucher.fulfilled, (state, action) => {
        const index = state.vouchers.findIndex((v) => v.id === action.payload.id);
        if (index !== -1) state.vouchers[index] = action.payload;
      })
      .addCase(rejectVoucher.fulfilled, (state, action) => {
        const index = state.vouchers.findIndex((v) => v.id === action.payload.id);
        if (index !== -1) state.vouchers[index] = action.payload;
      });
  },
});

export default voucherSlice.reducer;
