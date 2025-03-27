import axios from "axios";
const API_URL = "https://fakestoreapi.com/products";
export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};