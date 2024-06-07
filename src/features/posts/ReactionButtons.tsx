import { useAppDispatch } from "../../app/hooks";
import { reactionAdded } from "./postSlice";
import type { Post } from "../../types/post.types";

type ReactionButtonsProps = {
  post: Post;
};

const reactionEmoji: { [key in keyof Post["reactions"]]: string } = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }: ReactionButtonsProps) => {
  const dispatch = useAppDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(
            reactionAdded({
              postId: post.id,
              reaction: name as keyof Post["reactions"],
            }),
          )
        }
      >
        {emoji} {post.reactions[name as keyof Post["reactions"]]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
