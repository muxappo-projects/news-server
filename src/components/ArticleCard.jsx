export default function ArticleCard({ title, author, votes, image }) {
  return (
    <li>
      <h3>{title}</h3>
      <h4>By {author}</h4>
      <img src={image} />
      <p>{votes} votes</p>
    </li>
  );
}
