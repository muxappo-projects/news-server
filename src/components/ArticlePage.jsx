import { useEffect, useContext } from "react";
import { CurrentArticle } from "../contexts/CurrentArticle";
import { Loading } from "../contexts/Loading";
import * as api from "../utils/api";

export default function ArticlePage() {
  const { currentArticle, setCurrentArticle } = useContext(CurrentArticle);
  const { isLoading, setIsLoading } = useContext(Loading);
  const { article_id } = currentArticle;

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticleById(article_id).then(({ article }) => {
      const [returnedArticle] = article;
      setCurrentArticle(returnedArticle);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <p>Fetching Article Data...</p>
  ) : (
    <article>
      <h1>{currentArticle.title}</h1>

      <p>Written by {currentArticle.author}</p>
      <img src={currentArticle.article_img_url} alt={currentArticle.title} />
      <p>{currentArticle.body}</p>

      <section>
        <h3>Comments: {currentArticle.comment_count}</h3>
        {/* Comments will go here */}
      </section>
    </article>
  );
}
