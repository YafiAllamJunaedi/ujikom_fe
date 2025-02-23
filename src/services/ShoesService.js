import axios from "axios";
const API_URL = 'http://localhost:3000';

export const getAllShoes = async () => {
    try {
        const response = await axios.get(`${API_URL}/shoes`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching shoes:', error);
        throw error;
    }
};
export const addShoes = async (shoesData) => {
    try {
        const response = await axios.post(`${API_URL}/shoes/create`, shoesData);
        return response.data;
    } catch (error) {
        console.error('Error adding shoes:', error);
        throw error;
    }
};
export const deleteShoes = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/shoes/delete/${id}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error deleting shoes:', error);
        throw error;
    }
};
