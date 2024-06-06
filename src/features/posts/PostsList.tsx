import { useAppSelector } from "../../app/hooks";
import PostAuthor from "./PostAuthor";

const PostList = () => {
  const posts = useAppSelector(state => state.posts);

  return (
    <section>
      {posts.length === 0 ? (
        <>
          <h1>No Posts Currently</h1>
          <p>Create a post to see the content</p>
        </>
      ) : (
        posts.map(post => {
          const { id, title, content } = post;
          return (
            <article key={id}>
              <h2>{title}</h2>
              <p>{content.substring(0, 100)}</p>
              <p className="postCredit">
                <PostAuthor userId={id} />
              </p>
            </article>
          );
        })
      )}
    </section>
  );
};

export default PostList;
