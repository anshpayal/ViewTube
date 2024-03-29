import { createSlice } from "@reduxjs/toolkit";

const LiveChatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.splice(15,1);
      state.message.unshift(action.payload);
    },
  },
});

export const {addMessage} =LiveChatSlice.actions;
export default LiveChatSlice.reducer; 
