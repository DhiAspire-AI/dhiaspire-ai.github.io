// Demo API service
export const fetchDemoData = async () => {
  try {
    // const response = await fetch('/api/demo');
    // return await response.json();
    return { message: 'Demo data fetched' };
  } catch (error) {
    console.error('Error fetching demo data:', error);
    throw error;
  }
};
