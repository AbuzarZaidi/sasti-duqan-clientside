import * as api from "../../api/admin/dashboard"
export const getTotalRecord = async () => {
    try {
      const {data } = await api.getTotalRecord();
      return data;
    } catch (error) {
      return error;
    }
  };