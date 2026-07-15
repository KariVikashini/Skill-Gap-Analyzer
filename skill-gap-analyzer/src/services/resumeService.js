import axios from "axios";

const API = "http://localhost:8080/api/resume";

export const uploadResume = async (userId, file) => {

    const formData = new FormData();

    formData.append("userId", userId);
    formData.append("file", file);

    return axios.post(`${API}/upload`, formData);

};

export const getResumeUrl = (userId) => {

    return `${API}/view/${userId}`;

};

export const downloadResume = (userId) => {

    window.open(`${API}/download/${userId}`);

};