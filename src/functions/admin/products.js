import * as api from "../../api/admin/products"
export const createProducts=async(productInfo,visibility,selectedColors,selectedSizes,selectedCategorys)=>{
  try {
    const {data } = await api.createProducts(productInfo,visibility,selectedColors,selectedSizes,selectedCategorys);
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