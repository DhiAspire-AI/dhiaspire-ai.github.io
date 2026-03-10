/**
 * API service for Demo related requests
 */

import api from './api';

/**
 * Submits a new demo request to the backend.
 *
 * @param {Object} formData - The demo request data
 * @returns {Promise<Object>} The server response
 */
export const submitDemoRequest = async (formData) => {
  try {
    // Corrected endpoint path based on backend routes:
    // app.use("/", indexRouter) in app.ts
    // router.use("/website", websiteRouter) in index.ts
    // router.use("/demo", demoRouter) in websiteRoutes.ts
    // router.post("/bookAdemo", ...) in demoRoutes.ts
    const response = await api.post('/api/website/demo/bookAdemo', formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting demo request:', error);
    throw error;
  }
};
