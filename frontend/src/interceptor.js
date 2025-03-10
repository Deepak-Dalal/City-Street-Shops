import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL;

// Intercept all Axios requests
axios.interceptors.request.use(
  (config) => {
    // Prepend base URL if request URL is relative (does not start with http)
    if (!config.url.startsWith("http")) {
      config.url = `${API_BASE_URL}${config.url}`;
    }

    console.log(`[Axios Interceptor] Request to: ${config.url}`);
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: Intercept responses for global error handling
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(
      "[Axios Interceptor] API Error:",
      error.response?.data || error.message
    );
    return Promise.reject(error);
  }
);

console.log("[Axios Interceptor] Axios requests are now intercepted.");
