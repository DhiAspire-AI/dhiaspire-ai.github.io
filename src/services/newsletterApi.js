import api from './api';
import ENDPOINTS from './endpoints';

/**
 * Newsletter API service
 */
export const subscribeNewsletter = async (email) => {
  try {
    const { data } = await api.post(ENDPOINTS.WEBSITE.SUBSCRIBE, { email });
    return data;
  } catch (error) {
    throw error.response?.data?.message || 'Subscription failed';
  }
};
