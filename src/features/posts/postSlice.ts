import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type Post = {
  id: string;
  title: string;
  content: string;
};

type PostsState = Post[];

const initialState: PostsState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I have heard good things about Redux.",
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action: PayloadAction<Post>) {
      return {
        ...state,
        posts: [...state, action.payload],
      };
    },
  },
});

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
