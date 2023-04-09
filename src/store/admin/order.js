import { createSlice } from '@reduxjs/toolkit';
const initialOrderState = {  order:{}};
const orderSlice = createSlice({
    name: "order",
    initialState: initialOrderState,
    reducers: {
        setOrderHandler(state, action) {
            state.order=action.payload;
          },
    }
})
export const {
    setOrderHandler
  } = orderSlice.actions;
export default orderSlice.reducer;