import * as api from "../../api/admin/message"
export const getAllMessages = async () => {
    try {
      const {data } = await api.getAllMessages();
      return data;
    } catch (error) {
      return error;
    }
  };
export const getSingleMessage = async (messageId) => {
    try {
      const {data } = await api.getSingleMessage(messageId);
      return data;
    } catch (error) {
      return error;
    }
  };
  export const deleteMessage = async (multiId) => {
    try {
      const {data } = await api.deleteMessage(multiId);
      return data;
    } catch (error) {
      return error;
    }
  };