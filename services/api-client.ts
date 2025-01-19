import axios from "axios";

export const baseUrl = "http://localhost:3000";

export const apiClient = axios.create({
    timeout: 8000, // 8 seconds
});
