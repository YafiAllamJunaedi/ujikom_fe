import axios from 'axios';

const API_URL = 'http://localhost:3000/user'; 

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            email,
            password
        });
        return response.data.user;
    } catch (error) {
        throw error.response.data;
    }
};

export const registerUser = async (name, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, {
            name,
            email,
            password
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};


