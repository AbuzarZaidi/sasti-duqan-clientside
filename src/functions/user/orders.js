import * as api from "../../api/user/orders"
export const createOrder = async (order) => {
   
    try {
      const {data } = await api.createOrder(order);
      return data;
    } catch (error) {
      return error;
    }
  };
  export const getOrder = async () => {
    try {
      const {data } = await api.getAllOrder();
      return data;
    } catch (error) {
      return error;
    }
  };