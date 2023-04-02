import axios from "axios";
const url = "http://localhost:5000/products";
// export const createProducts = (product) => axios.post(`${url}`,product);
export const getAllProducts=()=>axios.get(`${url}/getMultipleProducts`)
// export const getAllProducts = (category,sortType,sortVal) => axios.get(`${url}?category=${category}&sort=${sortType},${sortVal}`);