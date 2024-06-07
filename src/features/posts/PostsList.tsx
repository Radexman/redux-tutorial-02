import { useAppSelector } from "../../app/hooks";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";

const PostList = () => {
  const { posts } = useAppSelector(state => state.posts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section>
      {posts.length === 0 ? (
        <>
          <h1>No Posts Currently</h1>
          <p>Create a post to see the content</p>
        </>
      ) : (
        orderedPosts.map(post => {
          const { id, title, date, content, userId } = post;
          return (
            <article key={id}>
              <h2>{title}</h2>
              <p>{content.substring(0, 100)}</p>
              <p className="postCredit">
                <PostAuthor userId={userId} />
                <TimeAgo timestamp={date} />
              </p>
              <ReactionButtons post={post} />
            </article>
          );
        })
      )}
    </section>
  );
};

export default PostList;
