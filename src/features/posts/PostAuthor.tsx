import { useAppSelector } from "../../app/hooks";

type PostAuthorProps = {
  userId: string;
};

const PostAuthor = ({ userId }: PostAuthorProps) => {
  const users = useAppSelector(state => state.users);

  const author = users.find(user => user.id === userId);

  return <span>by {author ? author.name : "Unknown author"}</span>;
};

export default PostAuthor;
