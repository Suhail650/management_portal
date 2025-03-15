import axios from "axios";

const API = "http://localhost:5001/institutions";

export const fetchInstitutionService = async () => {
  try {
    const response = await axios.get(API);
    return response.data;
  } catch (error) {
    console.error("Error fetching institutions:", error);
    throw error;
  }
};

export const fetchinstitutionByIdService = async (id) => {
  try {
    const response = await axios.get(`${API}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching institution with ID ${id}:`, error);
    throw error;
  }
};

export const updateStatusService = async (id, status) => {
  try {
    const response = await axios.patch(`${API}/${id}`, { status });
    return response.data;
  } catch (error) {
    console.error(`Error updating status for institution with ID ${id}:`, error);
    throw error;
  }
};