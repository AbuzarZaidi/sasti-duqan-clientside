import { createSlice } from '@reduxjs/toolkit';
const initialCartState = {  product:[],subTotal:0,shipping:50,total:0};
const productSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        setProductHandler(state, action) {
            state.product.push(action.payload);
          },
          setInitialProduct(state,action){
            state.product=action.payload;
          },
          setSubTotalHandler(state, action) {
            state.subTotal=action.payload;
          },
          setShippingHandler(state, action) {
            state.shipping=action.payload;
          },
          setTotalHandler(state) {
            state.total=state.subTotal+state.shipping;
          },
          setIncreaseQuantity(state,action){
            state.product[action.payload].productQuantity+=1;
          },
          setDecreaseQuantity(state,action){
            state.product[action.payload].productQuantity-=1;
          },
          setDeleteProductHandler(state,action){
state.product=action.payload;
          },
          resetProductHandler(){
            return initialCartState
           }
         
    }
})
export const {
    setProductHandler,setIncreaseQuantity,setTotalHandler, setShippingHandler,setSubTotalHandler,setDecreaseQuantity,setDeleteProductHandler,resetProductHandler,setInitialProduct
  } = productSlice.actions;
export default productSlice.reducer;