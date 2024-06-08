import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import { fetchUsers } from "./features/users/usersSlice";
import { ToastContainer } from "react-toastify";
import PostList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Redux Chapter 3 - Async Logic & Thunks</h1>
      <AddPostForm />
      <PostList />
      <ToastContainer />
    </div>
  );
};

export default App;
