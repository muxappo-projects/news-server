import { useState, useContext } from "react";
import { CurrentArticle } from "../contexts/CurrentArticle";
import { User } from "../contexts/User";
import * as api from "../utils/api";

export default function CommentField({ setCommentsList }) {
  const { currentArticle } = useContext(CurrentArticle);
  const { currentUser } = useContext(User);

  const [commentBody, setCommentBody] = useState("");
  const [commentSent, setCommentSent] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setCommentSent(true);
    setTimeout(() => {
      setCommentSent(false);
    }, 2000);

    api
      .postComment(currentUser, commentBody, currentArticle.article_id)
      .then((created_comment) => {
        setCommentsList((oldState) => {
          return [...oldState, created_comment];
        });
      })
      .catch((err) => {
        setErrMsg("Error posting comment - please try again");
      });

    setCommentBody("");
  }

  return (
    <form method="post" onSubmit={handleSubmit} className="comment-field">
      <label htmlFor="comment-body">What do you have to say?</label>

      <textarea
        name=""
        id="comment-body"
        cols="60"
        rows="5"
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
      ></textarea>

      <button>Post</button>

      {commentSent && <p>Comment sent!</p>}
      {errMsg && <p>{errMsg}</p>}
    </form>
  );
}
