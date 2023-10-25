import { useState, useContext } from "react";
import { CurrentArticle } from "../contexts/CurrentArticle";
import * as api from "../utils/api";

export default function CommentField({ setCommentsList }) {
  const { currentArticle } = useContext(CurrentArticle);

  const [commentBody, setCommentBody] = useState("");
  const [name, setName] = useState("");
  const [commentSent, setCommentSent] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setCommentSent(true);

    api
      .postComment(name, commentBody, currentArticle.article_id)
      .then((created_comment) => {
        console.log(created_comment);
        setCommentsList((oldState) => {
          return [...oldState, created_comment];
        });
      })
      .catch((err) => {
        setErrMsg("Error posting comment - please try again");
      });
  }

  return (
    <form method="post" onSubmit={handleSubmit} className="comment-field">
      <div>
        <label htmlFor="author">Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="comment-body">What do you have to say?</label>
        <textarea
          name=""
          id="comment-body"
          cols="60"
          rows="5"
          onChange={(e) => setCommentBody(e.target.value)}
        ></textarea>
      </div>
      <button>Post</button>
      {commentSent && <p>Comment sent!</p>}
      {errMsg && <p>{errMsg}</p>}
    </form>
  );
}
