import axios from "axios";
const url = "http://localhost:5000";
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
export const createProducts = (formData, header) => axios.post(`${url}/products/createProduct`,formData,header);
export const getAllPrivateProducts=(visibility)=>axios.post(`${url}/products/getAllPrivate`,{isAdmin:true,visibility:visibility})
export const getSinglePrivate=(id)=>axios.post(`${url}/products/getSinglePrivate/${id}`,{isAdmin:true})
export const deleteProduct=(multiId)=>axios.post(`${url}/products/deleteProduct`,{isAdmin:true,multiId})
export const updateProductStatus=(id,status)=>axios.post(`${url}/products/updateProductStatus/${id}`,{isAdmin:true,visibility:status})
export const updateProduct = (formData, header,id) => axios.post(`${url}/products/updateProduct/${id}`,formData,header);


