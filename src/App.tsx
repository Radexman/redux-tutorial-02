import { ToastContainer } from "react-toastify";
import PostList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
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
