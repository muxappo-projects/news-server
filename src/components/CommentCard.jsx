export default function CommentCard({ body, author, votes, created_at }) {
  return (
    <li>
      <p>{created_at}</p>
      <h4>{author}</h4>
      <p>{body}</p>
      <p>{votes} votes</p>
    </li>
  );
}
