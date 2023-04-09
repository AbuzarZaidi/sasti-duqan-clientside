import axios from "axios";
const url = "http://localhost:5000";
// export const createProd = (product) => axios.post(`${url}/products/addProduct`,product);
export const getAllOrders=()=>axios.post(`${url}/orders/allOrders`,{isAdmin:true})
export const getSingleOrder=(orderId)=>axios.post(`${url}/orders/singleOrder/${orderId}`,{isAdmin:true})
// export const deleteProduct=(multiId)=>axios.post(`${url}/products/deleteProduct`,{isAdmin:true,multiId})
// export const updateProductStatus=(id,status)=>axios.post(`${url}/products/updateProduct/${id}`,{isAdmin:true,visibility:status})
