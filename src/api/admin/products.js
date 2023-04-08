import axios from "axios";
const url = "http://localhost:5000";
export const createProducts = (productInfo,visibility,selectedColors,selectedSizes,selectedCategorys) => axios.post(`${url}/products/createProduct`,{productInfo,visibility,selectedColors,selectedSizes,selectedCategorys,isAdmin:true});
export const getAllPrivateProducts=(visibility)=>axios.post(`${url}/products/getAllPrivate`,{isAdmin:true,visibility:visibility})
export const deleteProduct=(multiId)=>axios.post(`${url}/products/deleteProduct`,{isAdmin:true,multiId})
export const updateProductStatus=(id,status)=>axios.post(`${url}/products/updateProduct/${id}`,{isAdmin:true,visibility:status})

