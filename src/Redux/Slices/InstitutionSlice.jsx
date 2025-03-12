import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  institutions: [
    {
      id: 1,
      name: "The Institute of Chartered Accountants of India (ICAI)",
      location: "India",
    },
    {
      id: 2,
      name: "Association of Chartered Accountants (ACCA)",
      location: "UK",
    },
    {
      id: 3,
      name: "Chartered Professional Accountants of Canada (CPA Canada)",
      location: "Canada",
    },
    {
      id: 4,
      name: "The Institute of Chartered Accountants in England and Wales (ICAEW)",
      location: "UK",
    },
    {
      id: 5,
      name: "Chartered Accountants Australia and New Zealand (CA ANZ)",
      location: "Australia & New Zealand",
    },
    {
      id: 6,
      name: "South African Institute of Chartered Accountants (SAICA)",
      location: "South Africa",
    },
    {
      id: 7,
      name: "The Institute of Chartered Accountants of Pakistan (ICAP)",
      location: "Pakistan",
    },
    {
      id: 8,
      name: "Hong Kong Institute of Certified Public Accountants (HKICPA)",
      location: "Hong Kong",
    },
    {
      id: 9,
      name: "The Institute of Chartered Accountants of Bangladesh (ICAB)",
      location: "Bangladesh",
    },
    {
      id: 10,
      name: "The Institute of Chartered Accountants of Sri Lanka (CA Sri Lanka)",
      location: "Sri Lanka",
    },
  ],
};

const institutionSlice = createSlice({
  name: "institution",
  initialState,
  reducers: {
    getInstitutions: (state) => state.institutions,
  },
});

export const { getInstitutions } = institutionSlice.actions;
export default institutionSlice.reducer;
