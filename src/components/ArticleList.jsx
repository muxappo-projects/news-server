import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import SortBy from "./SortBy";
import ScrollButton from "./ScrollButton";
import * as api from "../utils/api";
import * as util from "../utils/utils";

export default function ArticleList({ topic = null }) {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [sortby, setSortBy] = useState("date");
  const [order, setOrder] = useState("desc");

  const navigate = useNavigate();
  const topRef = useRef(null);

  useEffect(() => {
    api.fetchArticles(topic, sortby, order).then(({ articles }) => {
      setArticleList(articles);
      setIsLoading(false);
    });
  }, [sortby, order]);

  return isLoading ? (
    <p>Fetching Article Data...</p>
  ) : (
    <main>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <h1 ref={topRef}>
        {topic ? `${util.formatContent(topic)} Articles` : "Available Articles"}
      </h1>

      <div>
        <SortBy sortby={sortby} setSortBy={setSortBy} />
        Order:
        <button
          className="order-button"
          onClick={() =>
            setOrder(() => {
              return order === "asc" ? "desc" : "asc";
            })
          }
        >
          {util.formatContent(order)}.
        </button>
      </div>
      <ul>
        {articleList.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
      <ScrollButton ref={topRef} />
    </main>
  );
}
