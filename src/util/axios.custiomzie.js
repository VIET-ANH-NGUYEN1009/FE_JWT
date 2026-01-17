import axios from "axios";

/**
 * Axios instance
 */
const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:8080",
  // withCredentials: true,
});
console.log("ENV backend:", import.meta.env.VITE_BACKEND_URL);

/**
 * REQUEST INTERCEPTOR
 */
instance.interceptors.request.use(
  (config) => {
    console.log("👉 Request:", config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => Promise.reject(error),
);

/**
 * RESPONSE INTERCEPTOR
 * 👉 TRẢ VỀ response.data
 */
instance.interceptors.response.use(
  (response) => {
    console.log("✅ Response:", response.status, response.config.url);
    return response; // ⭐ QUAN TRỌNG
  },
  (error) => {
    console.error("❌ Error:", error.response?.status, error.message);
    return Promise.reject(error);
  },
);

export default instance;
