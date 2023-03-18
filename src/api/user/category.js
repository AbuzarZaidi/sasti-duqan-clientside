import axios from "axios";
const url = "http://localhost:5000/category/";
export const getAllCategory = () => axios.get(url);