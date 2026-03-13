/**
 * API service for Demo related requests
 */

import api from './api';
import ENDPOINTS from './endpoints';

/**
 * Submits a new demo request to the backend.
 *
 * @param {Object} formData - The demo request data
 * @returns {Promise<Object>} The server response
 */
export const submitDemoRequest = async (formData) => {
  try {
    const { data } = await api.post(ENDPOINTS.WEBSITE.DEMO, formData);
    return data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to submit demo request';
  }
};
