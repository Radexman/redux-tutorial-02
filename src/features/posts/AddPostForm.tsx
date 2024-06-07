import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { postAdded } from "./postSlice";
import { toast } from "react-toastify";

const AddPostForm = () => {
  const users = useAppSelector(state => state.users);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useAppDispatch();

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  const handleAuthorChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setUserId(e.target.value);

  const resetForm = () => {
    setTitle("");
    setContent("");
    setUserId(""); // Reset userId
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) {
      toast.error("Please add post title ⚠️");
      return;
    }

    if (!content) {
      toast.error("Please add post content ⚠️");
      return;
    }

    if (!userId) {
      toast.error("Please select an author ⚠️");
      return;
    }

    dispatch(postAdded(title, content, userId));

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
        <select
          name="userId"
          id="userId"
          onChange={handleAuthorChange}
          value={userId}
        >
          <option value=""></option>
          {users.map(user => {
            const { id, name } = user;
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          })}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={handleContentChange}
          placeholder="Share your thoughts..."
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default AddPostForm;
