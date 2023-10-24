import * as util from "../utils/utils";

export default function CommentCard({ body, author, votes, created_at }) {
  return (
    <li>
      <h4>{author}</h4>
      <p>{body}</p>
      <p>Posted on {util.toDate(created_at)}</p>
      <p>{votes} votes</p>
    </li>
  );
}
