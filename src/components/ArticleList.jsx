import { useEffect, useState, useContext } from "react";
import { Loading } from "../contexts/Loading";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";

export default function ArticleList() {
  const [articleList, setArticleList] = useState("");
  const { isLoading, setIsLoading } = useContext(Loading);

  useEffect(() => {
    setIsLoading(true);
    api.fetchAllArticles().then(({ articles }) => {
      setArticleList(articles);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <p>Fetching Article Data...</p>
  ) : (
    <main>
      <h2>Available Articles</h2>
      <ul>
        {articleList.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </main>
  );
}
