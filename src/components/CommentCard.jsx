import * as api from "../utils/api";
import * as util from "../utils/utils";
import { useContext, useState } from "react";
import { User } from "../contexts/User";

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
    <li>
      <h4>{author}</h4>
      <p>{body}</p>
      <p>Posted on {util.dateAndTime(created_at)}</p>
      <p>{votes} votes</p>

      {currentUser === author && (
        <button onClick={() => deleteComment(id)}>Delete Comment</button>
      )}

      {errMsg && <p>{errMsg}</p>}
    </li>
  );
}
