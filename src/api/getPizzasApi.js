import axios from 'axios';

export const API_URL = 'http://localhost:3001/pizza'; 
export const getPizzas = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }




};