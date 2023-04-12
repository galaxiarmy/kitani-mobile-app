import axios from 'axios';

export const BASE_URL = 'https://talent-workspace.kitani.co:8999';
export const API_KEY =
  '0fc556536aabb1d9fa677d0118155cf50da4408dc0c3021a470021b1d86ba758';

export const getDataProduct = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/product`, {
      headers: {
        'x-api-key': `${API_KEY}`,
      },
    });

    if (response.status === 200) {
      return response.data.data;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};

export const addProduct = async (amount, sku_code) => {
  const payload = {
    amount: amount,
  };
  try {
    const response = await axios.post(
      `${BASE_URL}/product/${sku_code}/add-stock`,
      payload,
      {
        headers: {
          'x-api-key': `${API_KEY}`,
        },
      },
    );

    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};

export const deductProduct = async (amount, sku_code) => {
  const payload = {
    amount: amount,
  };
  try {
    const response = await axios.post(
      `${BASE_URL}/product/${sku_code}/deduct-stock`,
      payload,
      {
        headers: {
          'x-api-key': `${API_KEY}`,
        },
      },
    );

    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};
