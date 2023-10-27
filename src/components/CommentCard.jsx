import * as api from "../utils/api";
import * as util from "../utils/utils";
import { useContext, useState } from "react";
import { User } from "../contexts/User";
import Voter from "../components/Voter";

export default function CommentCard({ body, author, votes, created_at, id }) {
  const { currentUser } = useContext(User);
  const [errMsg, setErrMsg] = useState(null);

  function deleteComment(id) {
    api.deleteComment(id).catch((err) => {
      setErrMsg("Error deleting comment - please try again");
      setTimeout(() => {
        setErrMsg(null);
      }, 2000);
    });
  }

  return (
    <li className="comment">
      <div className="comment-header">
        <strong>
          {author} | Posted {util.commentDate(created_at)} | {votes} votes{" "}
        </strong>
        {currentUser === author && (
          <button onClick={() => deleteComment(id)}>Delete Comment</button>
        )}
      </div>

      <div className="comment-body">
        <p>{body}</p>
        <p></p>
      </div>

      {errMsg && <p>{errMsg}</p>}
    </li>
  );
}
