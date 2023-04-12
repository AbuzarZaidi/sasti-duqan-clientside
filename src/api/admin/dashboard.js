import axios from "axios";
const url = "http://localhost:5000";
export const getTotalRecord=()=>axios.post(`${url}/payments/totalRecord`,{isAdmin:true})
