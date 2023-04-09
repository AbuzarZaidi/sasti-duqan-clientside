import * as api from "../../api/admin/orders"
export const getAllOrders = async () => {
    try {
      const {data } = await api.getAllOrders();
      return data;
    } catch (error) {
      return error;
    }
  };
export const getSingleOrder = async (orderId) => {
    try {
      const {data } = await api.getSingleOrder(orderId);
      return data;
    } catch (error) {
      return error;
    }
  };
  export const deleteOrder = async (multiId) => {
    try {
      const {data } = await api.deleteOrder(multiId);
      return data;
    } catch (error) {
      return error;
    }
  };