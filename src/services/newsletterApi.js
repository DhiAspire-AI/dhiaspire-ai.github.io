import api from './api';

/**
 * Newsletter API service
 */
export const subscribeNewsletter = async (email) => {
  try {
    const response = await api.post('/website/subscribe', { email });
    return response.data;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
};
