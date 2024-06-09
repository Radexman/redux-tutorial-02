export type Post = {
  id: string | number;
  title: string;
  body: string;
  date: string;
  userId: string;
  reactions: {
    thumbsUp: number;
    wow: number;
    heart: number;
    rocket: number;
    coffee: number;
  };
};
