import { createSlice, nanoid } from "@reduxjs/toolkit";

export const messagesSlice = createSlice({
  name: "messages",
  initialState: [{ id: nanoid(), textMessage: "Hi! How r u?" }],
  reducers: {
    createMessage: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { createMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
