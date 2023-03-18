import * as api from "../../api/user/users"
export const signUp = async (user) => {
  try {
    const { data } = await api.signUp(user);

    return data;
  } catch (error) {
    return error;
  }
};

export const logIn = async (user) => {
  try {
    const { data } = await api.logIn(user);
    return data;
  } catch (error) {
    return error;
  }
};
// const getUser = async () => {
//   try {
//     const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
//     const { data } = await axios.get(url, { withCredentials: true });
//     console.log(data.user._json)
//     // setUser(data.user._json);
//   } catch (err) {
//     console.log(err);
//   }
// };