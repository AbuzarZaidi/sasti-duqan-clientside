import axios from "axios";
const url = "http://localhost:5000/contactUs/sendMessage";
export const contactUsHandler = (message) => axios.post(`${url}`,message);
