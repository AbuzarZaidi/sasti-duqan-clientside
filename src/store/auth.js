import { createSlice } from '@reduxjs/toolkit';
const initialAuthState = {  token:"",id:"",isLogin:false,active:0,userName:"",role:""};
const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        setTokenHandler(state, action) {
            state.token=action.payload;
            state.isLogin=!!action.payload
          },
          setIdHandler(state, action) {
            state.id=action.payload;
          },
          setNameHandler(state, action) {
            state.userName=action.payload;
          },
          setRoleHandler(state, action) {
            state.role=action.payload;
          },
setlogoutHandler(state){
  state.token="";
  state.id="";
  state.isLogin=false;
},
setLogin(state){
  state.isLogin=true
},
setActiveHandler(state){
state.active=Math.floor(Math.random() * 10);
}
    }
})
export const {
    setTokenHandler, setIdHandler,setlogoutHandler,setActiveHandler,setNameHandler,setLogin,setRoleHandler
  } = authSlice.actions;
export default authSlice.reducer;