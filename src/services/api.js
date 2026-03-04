import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 10000, // 10 seconds
});

// Response interceptor for consistent error handling
api.interceptors.response.use(
  (response) => {
    // Return the response directly
    // This allows services to access response.data or the whole response
    return response;
  },
  (error) => {
    // Standardize error reporting
    // Extracts the detailed message or validation errors from the backend
    const errorData = error.response?.data;

    const normalizedError = {
      message: errorData?.message || 'An unexpected error occurred',
      errors: errorData?.errors || [], // Captures Joi validation error messages
      status: error.response?.status || 500,
      originalError: error,
    };

    return Promise.reject(normalizedError);
  },
);

export default api;
