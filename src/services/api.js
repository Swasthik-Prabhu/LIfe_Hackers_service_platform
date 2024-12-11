import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Replace with your FastAPI backend URL
});

export const registerUser = async (data) => {
  try {
    const response = await API.post('/users/register', data);
    return response.data;
  } catch (error) {
    console.error('Signup Error:', error.response?.data);
    throw error.response?.data || 'Error during registration';
  }
};

export const loginUser = async (data) => {
  try {
    const response = await API.post('/users/login', data);
    return response.data;
  } catch (error) {
    console.error('Login Error:', error.response?.data);
    throw error.response?.data || 'Error during login';
  }
};

export default API;
