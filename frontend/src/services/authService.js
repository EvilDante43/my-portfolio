import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// Login admin
export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password }, {
    withCredentials: true,
  });
  return response.data;
};

// Logout admin
export const logout = async () => {
  const response = await axios.post(`${API_URL}/logout`, {}, {
    withCredentials: true,
  });
  return response.data;
};

// Get current user info (me)
export const checkAuth = async () => {
  const response = await axios.get(`${API_URL}/me`, {
    withCredentials: true,
  });
  return response.data;
};
