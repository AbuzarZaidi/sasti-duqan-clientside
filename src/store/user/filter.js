import { createSlice } from '@reduxjs/toolkit';
const initialFilterState = {  category:"",size:"",color:"",price:"",sort:"",showing:""};
const filterSlice = createSlice({
    name: "filter",
    initialState:initialFilterState,
    reducers: {
        setCategoryHandler(state, action) {
            state.category=action.payload;
          },
          setSizeHandler(state, action) {
            state.size=action.payload;
          },
          setColorHandler(state, action) {
            state.color=action.payload;
          },
          setPriceHandler(state, action) {
            state.price=action.payload;
          },
          setSortHandler(state, action) {
            state.sort=action.payload;
          },
          setShowingHandler(state, action) {
            state.showing=action.payload;
          },
        
    }
})
export const {
    setSizeHandler,setCategoryHandler,setColorHandler,setPriceHandler,setSortHandler,setShowingHandler
  } = filterSlice.actions;
export default filterSlice.reducer;