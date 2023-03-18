import * as api from "../../api/user/products"
export const getProducts = async () => {
    try {
      const {data } = await api.getAllProducts();
      return data;
    } catch (error) {
      return error;
    }
  };