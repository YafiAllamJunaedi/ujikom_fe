import axios from "axios";
const API_URL = 'http://localhost:3000';

export const getAllTransaction = async () => {
    try {
        const response = await axios.get(`${API_URL}/transaction`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching transaction:', error);
        throw error;
    }
};