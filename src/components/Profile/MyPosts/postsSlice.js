import { createSlice, nanoid } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: [{ id: nanoid(), contentPost: "Hello, World!" }],
  reducers: {
    createPost: (state, action) => {
      state.push(action.payload);
    },

    editPost: (state, action) => {
      const { id, contentPost } = action.payload;
      const existPost = state.find((post) => post.id === id);

      if (existPost) {
        existPost.contentPost = contentPost;
      }
    },
  },
});

export const { createPost, editPost } = postsSlice.actions;

export default postsSlice.reducer;
