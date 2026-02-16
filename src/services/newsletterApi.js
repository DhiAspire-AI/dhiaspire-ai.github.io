// Newsletter API service
export const subscribeNewsletter = async (email) => {
  try {
    // const response = await fetch('/api/newsletter', {
    //   method: 'POST',
    //   body: JSON.stringify({ email }),
    // });
    // return await response.json();
    return { success: true };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
};
