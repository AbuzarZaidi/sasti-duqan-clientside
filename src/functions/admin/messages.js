import * as api from "../../api/admin/message"
export const getAllMessages = async () => {
    try {
      const {data } = await api.getAllMessages();
      return data;
    } catch (error) {
      return error;
    }
  };