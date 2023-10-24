import { useEffect, useContext, useState, useRef } from "react";
import { CurrentArticle } from "../contexts/CurrentArticle";
import { Loading } from "../contexts/Loading";
import { Link } from "react-router-dom";
import CommentSection from "./CommentSection";
import ScrollButton from "./ScrollButton";
import * as api from "../utils/api";

export default function ArticlePage() {
  const { currentArticle, setCurrentArticle } = useContext(CurrentArticle);
  const { isLoading, setIsLoading } = useContext(Loading);

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const commentsRef = useRef(null);
  const topRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);

    api.fetchArticleById(currentArticle.article_id).then(({ article }) => {
      const [returnedArticle] = article;
      setCurrentArticle(returnedArticle);
    });
  }, []);

  useEffect(() => {
    api.fetchComments(currentArticle.article_id).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <p>Fetching Article Data...</p>
  ) : (
    <article>
      <Link to="/articles">
        <button onClick={() => setIsLoading(true)}>
          Return to Article List
        </button>
      </Link>
      <h1 ref={topRef}>{currentArticle.title}</h1>

      <p>Written by {currentArticle.author}</p>
      <img src={currentArticle.article_img_url} alt={currentArticle.title} />
      <p>{currentArticle.body}</p>
      <button
        onClick={() =>
          showComments ? setShowComments(false) : setShowComments(true)
        }
      >
        {showComments ? "Hide comments" : "Show comments"}
      </button>

      {showComments && (
        <CommentSection
          commentsList={comments}
          commentCount={currentArticle.comment_count}
          ref={commentsRef}
        />
      )}

      {showComments && <ScrollButton ref={topRef} />}
    </article>
  );
}
