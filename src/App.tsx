import { ToastContainer } from "react-toastify";
import PostList from "./features/posts/PostList";
import AddPostForm from "./features/posts/AddPostForm";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <h1>Redux Chapter 2</h1>
      <PostList />
      <AddPostForm />
      <ToastContainer />
    </div>
  );
};

export default App;
