import axios from "axios";
const url = "http://localhost:5000";
export const getAllMessages=()=>axios.post(`${url}/contactUs/getMultipleMessages`,{isAdmin:true})
export const getSingleMessage=(messageId)=>axios.post(`${url}/contactUs/getSingleMessage/${messageId}`,{isAdmin:true})

export const deleteMessage=(multiId)=>axios.post(`${url}/contactUs/deleteMessage`,{isAdmin:true,multiId})