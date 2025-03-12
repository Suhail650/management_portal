import axios from 'axios';

const API_URL = 'https://api.example.com/vouchers';

// export const fetchVoucherService = async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// };

export const fetchVoucherService = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            {
              id: 1,
              institute: "XYZ University",
              studentName: "John Doe",
              amount: 500,
              status: "pending",
            },
            {
              id: 2,
              institute: "ABC College",
              studentName: "Jane Smith",
              amount: 750,
              status: "approved",
            },
            {
              id: 3,
              institute: "LMN Academy",
              studentName: "Alice Brown",
              amount: 600,
              status: "rejected",
            },
            {
              id: 4,
              institute: "PQR Institute",
              studentName: "Bob Johnson",
              amount: 800,
              status: "pending",
            },
          ],
        });
      }, 1000); // Simulate network delay
    });
  };
  

export const approveVoucherService = async (id, certificateImage) => {
  const formData = new FormData();
  formData.append('certificateImage', certificateImage);
  const response = await axios.post(`${API_URL}/${id}/approve`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

export const rejectVoucherService = async (id) => {
  const response = await axios.post(`${API_URL}/${id}/reject`);
  return response.data;
};