import axios from "axios";
const url = "http://localhost:5000";
// export const createProd = (product) => axios.post(`${url}/products/addProduct`,product);
export const getAllOrders=()=>axios.post(`${url}/orders/allOrders`,{isAdmin:true})
export const getSingleOrder=(orderId)=>axios.post(`${url}/orders/singleOrder/${orderId}`,{isAdmin:true})
export const deleteOrder=(multiId)=>axios.post(`${url}/orders/deleteOrder`,{isAdmin:true,multiId})

export const updateOrderStatus=(id,status)=>axios.post(`${url}/orders/updateOrder`,{isAdmin:true,id,status})
