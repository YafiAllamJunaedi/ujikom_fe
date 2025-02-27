import axios from 'axios';

const API_URL = 'http://localhost:3000/admin'; 

export const loginAdmin = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            email,
            password
        });
        return response.data.admin;
    } catch (error) {
        throw error.response.data;
    }
};