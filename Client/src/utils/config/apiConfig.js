// import axios from "axios";
// import { environmentConfig } from "../config/environmentConfig";
// // import { getItem } from "../config/storageConfig";

// export const axiosInstance = axios.create({
//     baseURL:environmentConfig.baseURL,
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('token'),
//     },
// });

import axios from "axios";
import { environmentConfig } from "../config/environmentConfig";

export const axiosInstance = axios.create({
    baseURL: environmentConfig.baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor to add the Authorization token before each request
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');  // Retrieve token from localStorage
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
