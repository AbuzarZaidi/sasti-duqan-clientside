import axios from "axios";
const url = "http://localhost:5000";
export const getAllMessages=()=>axios.post(`${url}/contactUs/getMultipleMessages`,{isAdmin:true})