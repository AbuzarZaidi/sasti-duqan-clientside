import * as api from "../../api/admin/orders"
export const getAllOrders = async () => {
    try {
      const {data } = await api.getAllOrders();
      return data;
    } catch (error) {
      return error;
    }
  };