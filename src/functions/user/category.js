import * as api from "../../api/category"
export const getCategory = async () => {
    try {
      const {data } = await api.getAllCategory();
      // console.log("in function")
      // console.log(data)
      return data;

    } catch (error) {
      return error;
    }
  };