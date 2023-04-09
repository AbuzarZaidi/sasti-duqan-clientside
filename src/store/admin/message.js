import { createSlice } from '@reduxjs/toolkit';
const initialMessageState = {  message:{}};
const messageSlice = createSlice({
    name: "message",
    initialState: initialMessageState,
    reducers: {
        setMessageHandler(state, action) {
            state.message=action.payload;
          },
    }
})
export const {
    setMessageHandler
  } = messageSlice.actions;
export default messageSlice.reducer;