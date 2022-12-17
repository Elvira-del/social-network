import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../components/Profile/MyPosts/postsSlice";
import messagesReducer from "../components/Dialogs/messagesSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
    messages: messagesReducer,
  },
});
