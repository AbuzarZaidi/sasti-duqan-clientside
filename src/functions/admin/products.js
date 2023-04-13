import * as api from "../../api/admin/products"
export const createProducts=async(formData, header)=>{
  try {
    const {data } = await api.createProducts(formData, header);
    return data;
  } catch (error) {
    return error;
  }
}
export const getAllPrivateProducts = async (visibility) => {
    try {
      const {data } = await api.getAllPrivateProducts(visibility);
      return data;
    } catch (error) {
      return error;
    }
  };
export const getSinglePrivate = async (id) => {
    try {
      const {data } = await api.getSinglePrivate(id);
      return data;
    } catch (error) {
      return error;
    }
  };
  export const deleteProduct = async (id) => {
    try {
      const {data } = await api.deleteProduct(id);
      return data;
    } catch (error) {
      return error;
    }
  };
  export const updateProductStatus = async (id,status) => {
    try {
      const {data } = await api.updateProductStatus(id,status);
      return data;
    } catch (error) {
      return error;
    }
  };
  export const updateProduct=async(formData, header,id)=>{
    try {
      const {data } = await api.updateProduct(formData, header,id);
      return data;
    } catch (error) {
      return error;
    }
  }