import { createSlice, nanoid } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: [{ id: nanoid(), contentPost: "Hello, World!" }],
  reducers: {
    createPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { createPost } = postsSlice.actions;

export default postsSlice.reducer;
