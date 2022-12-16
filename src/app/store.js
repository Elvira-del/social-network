import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../components/MyPosts/postsSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
