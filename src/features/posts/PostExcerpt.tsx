import type { Post } from "../../types/post.types";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";

type PostExcerptProps = {
  post: Post;
};

const PostExcerpt = ({ post }: PostExcerptProps) => {
  const { title, date, body, userId } = post;
  return (
    <article>
      <h2>{title}</h2>
      <p>{body.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={userId} />
        <TimeAgo timestamp={date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostExcerpt;
