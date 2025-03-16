import axios from 'axios';

const API_URL = 'https://api.example.com/vouchers';

// export const fetchVoucherService = async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// };

export const fetchVoucherService = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [
        {
          id: 1,
          institution: "XYZ University", // ✅ Changed 'institute' to 'institution'
          quantity: 500, // ✅ Changed 'amount' to 'quantity'
          status: "pending",
        },
        {
          id: 2,
          institution: "ABC College",
          quantity: 750,
          status: "approved",
        },
        {
          id: 3,
          institution: "LMN Academy",
          quantity: 600,
          status: "rejected",
        },
        {
          id: 4,
          institution: "PQR Institute",
          quantity: 800,
          status: "pending",
        },
      ];
      // console.log("Mock data fetched:", data);
      resolve({ data });
    }, 1000);
  });
};
  
export const approveVoucherService = async (id) => {
  const response = await axios.post(`${API_URL}/${id}/approve`, {}, {
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

// export const approveVoucherService = async (id, certificateImage) => {
//   const formData = new FormData();
//   formData.append('certificateImage', certificateImage);
//   const response = await axios.post(`${API_URL}/${id}/approve`, formData, {
//     headers: { 'Content-Type': 'multipart/form-data' },
//   });
//   return response.data;
// };

export const rejectVoucherService = async (id) => {
  const response = await axios.post(`${API_URL}/${id}/reject`);
  return response.data;
};