import { createSlice } from '@reduxjs/toolkit';
const initialProductState = {  product:{},category:"all"};
const productSlice = createSlice({
    name: "product",
    initialState: initialProductState,
    reducers: {
        setProductHandler(state, action) {
            state.product=action.payload;
          },
          setCategoryHandler(state, action) {
            state.category=action.payload;
          },
    }
})
export const {
    setProductHandler,setCategoryHandler
  } = productSlice.actions;
export default productSlice.reducer;