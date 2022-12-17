import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../components/Profile/MyPosts/postsSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
