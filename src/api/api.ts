const BASE_URL = 'https://groww-intern-assignment.vercel.app/v1/api';

export const fetchOrderDetails = async () => {
  try {
    const response = await fetch(`${BASE_URL}/order-details`);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error; 
  }
};
