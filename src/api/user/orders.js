import axios from "axios";
const url = "http://localhost:5000/orders";
export const createOrder = (order) => axios.post(`${url}/createOrder`,order);
export const getAllOrder = () => axios.get(`${url}/`);