import axios from "axios";

const API_URL = "http://localhost:8080/api/profile";

export const getProfile = async (userId) => {
    return await axios.get(`${API_URL}/${userId}`);
};

export const saveProfile = async (profileData) => {
    return await axios.put(API_URL, profileData);
};