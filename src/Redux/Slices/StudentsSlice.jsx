import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [
    { id: 1, name: 'John Doe', status: 'Pending' },
    { id: 2, name: 'Jane Smith', status: 'Approved' },
    { id: 3, name: 'Michael Brown', status: 'Pending' },
    { id: 4, name: 'Emily Johnson', status: 'Rejected' },
    { id: 5, name: 'David Wilson', status: 'Approved' },
    { id: 6, name: 'Sophia Martinez', status: 'Pending' },
    { id: 7, name: 'James Anderson', status: 'Rejected' },
    { id: 8, name: 'Olivia Thomas', status: 'Approved' },
    { id: 9, name: 'Daniel Lee', status: 'Pending' },
    { id: 10, name: 'Emma Garcia', status: 'Approved' },
  ],
  filterStatus: 'All',
  searchQuery: '',
};

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    approveStudent: (state, action) => {
      const student = state.students.find((s) => s.id === action.payload);
      if (student) student.status = 'Approved';
    },
    rejectStudent: (state, action) => {
      state.students = state.students.filter((s) => s.id !== action.payload);
    },
  },
});

export const { setFilterStatus, setSearchQuery, approveStudent, rejectStudent } =
  studentsSlice.actions;
export default studentsSlice.reducer;
