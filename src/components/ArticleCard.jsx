import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentArticle } from "../contexts/CurrentArticle";
import * as util from "../utils/utils.js";

export default function ArticleCard({ article }) {
  const { setCurrentArticle } = useContext(CurrentArticle);

  return (
    <li>
      <Link
        to={`/article-${article.article_id}`}
        onClick={() => setCurrentArticle(article)}
      >
        <h3>{article.title}</h3>
      </Link>
      <h4>By {article.author}</h4>
      <img src={article.article_img_url} alt={article.title} />
      <p>{util.toDate(article.created_at)}</p>
      <p>{article.votes} votes</p>
    </li>
  );
}
