import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";

export default function ArticleList() {
  const [articleList, setArticleList] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
