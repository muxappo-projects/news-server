import { useEffect, useContext, useState, useRef } from "react";
import { CurrentArticle } from "../contexts/CurrentArticle";
import { useNavigate } from "react-router-dom";
import CommentSection from "./CommentSection";
import ScrollButton from "./ScrollButton";
import Voter from "./Voter";
import * as api from "../utils/api";
import * as util from "../utils/utils";

export default function ArticlePage() {
  const { currentArticle, setCurrentArticle } = useContext(CurrentArticle);

  const [isLoading, setIsLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const commentsRef = useRef(null);
  const topRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const articleData = api.fetchArticleById(currentArticle.article_id);
    const commentData = api.fetchComments(currentArticle.article_id);

    Promise.all([articleData, commentData])
      .then(([{ article }, { comments }]) => {
        const [returnedArticle] = article;
        setComments(comments);
        setCurrentArticle(returnedArticle);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <p>Fetching Article Data...</p>
  ) : (
    <article>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>

      <h1 ref={topRef}>{currentArticle.title}</h1>

      <p>Written by {currentArticle.author} on</p>
      <p>{util.dateAndTime(currentArticle.created_at)}</p>
      <img src={currentArticle.article_img_url} alt={currentArticle.title} />
      <p>{currentArticle.body}</p>
      <Voter />
      <button
        onClick={() =>
          showComments ? setShowComments(false) : setShowComments(true)
        }
      >
        {showComments
          ? "Hide comments"
          : `Show comments (${currentArticle.comment_count})`}
      </button>

      {showComments && (
        <CommentSection
          commentsList={comments}
          setCommentsList={setComments}
          ref={commentsRef}
        />
      )}

      {showComments && <ScrollButton ref={topRef} />}
    </article>
  );
}
