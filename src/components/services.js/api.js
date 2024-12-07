import axios from 'axios';


// Set your backend base URL
const API_BASE_URL = 'https://research-finder-server.vercel.app';

export const signIn = async (accountData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signin`, accountData);
    return response.data; // Returns the response data if successful
  } catch (error) {
    console.error('Error during sign-in:', error);
    throw error; // Rethrow the error for further handling
  }
};