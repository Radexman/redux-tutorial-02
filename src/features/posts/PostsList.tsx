import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { nanoid } from "@reduxjs/toolkit";
import { fetchPosts } from "./postSlice";
import PostExcerpt from "./PostExcerpt";

const PostList = () => {
  const { posts, status, error } = useAppSelector(state => state.posts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  let content;
  if (status === "loading") {
    content = <p>Loading...</p>;
  } else if (status === "succeeded") {
    const orderedPosts = posts;
    content = orderedPosts.map(post => (
      <PostExcerpt key={nanoid()} post={post} />
    ));
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostList;
