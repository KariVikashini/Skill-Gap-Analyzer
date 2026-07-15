import axios from "axios";

const API_URL = "http://localhost:8080/api/admin/students";

export const getStudents = async () => {
    return await axios.get(API_URL);
};