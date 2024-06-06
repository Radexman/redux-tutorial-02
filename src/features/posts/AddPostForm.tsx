import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postSlice";
import { toast } from "react-toastify";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useAppDispatch();

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  const resetForm = () => {
    setTitle("");
    setContent("");
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) {
      toast.error("⚠️ Please add post title");
      return;
    }

    if (!content) {
      toast.error("⚠️ Please add post content");
      return;
    }

    dispatch(
      postAdded({
        id: nanoid(),
        title,
        content,
      }),
    );

    toast.success("🎊 Post created");
    resetForm();
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={handleTitleChange}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={handleContentChange}
          placeholder="Share your thaughts..."
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default AddPostForm;
