import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];