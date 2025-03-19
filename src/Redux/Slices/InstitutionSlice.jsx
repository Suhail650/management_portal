import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchinstitutionByIdService, fetchInstitutionService, updateStatusService} from '../../services/institutionService';

export const fetchInstitutions = createAsyncThunk(
  'institution/fetchInstitutions',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchInstitutionService();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchInstitutionById = createAsyncThunk(
  'institution/fetchInstitutionById',
  async (id, { rejectWithValue }) => {
    try {
      return await fetchinstitutionByIdService(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateInstitutionStatus = createAsyncThunk(
  'institution/updateStatus',
  async ({ id, status }, { rejectWithValue }) => {
    try {
      return await updateStatusService(id, status);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const institutionSlice = createSlice({
  name: 'institution',
  initialState: {
    institutions: [],
    institution: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInstitutions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInstitutions.fulfilled, (state, action) => {
        state.loading = false;
        state.institutions = action.payload;
      })
      .addCase(fetchInstitutions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchInstitutionById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInstitutionById.fulfilled, (state, action) => {
        state.loading = false;
        state.institution = action.payload;
      })
      .addCase(fetchInstitutionById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateInstitutionStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateInstitutionStatus.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.institutions.findIndex((inst) => inst.id === action.payload.id);
        if (index !== -1) {
          state.institutions[index].status = action.payload.status;
        }
        if (state.institution?.id === action.payload.id) {
          state.institution.status = action.payload.status;
        }
      })
      .addCase(updateInstitutionStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default institutionSlice.reducer;
