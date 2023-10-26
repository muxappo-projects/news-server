import * as api from "../utils/api";
import * as util from "../utils/utils";
import { useContext } from "react";
import { User } from "../contexts/User";

export default function CommentCard({ body, author, votes, created_at, id }) {
  const { currentUser } = useContext(User);

  return (
    <li>
      <h4>{author}</h4>
      <p>{body}</p>
      <p>Posted on {util.dateAndTime(created_at)}</p>
      <p>{votes} votes</p>
      {currentUser === author && (
        <button
          onClick={() => {
            api.deleteComment(id);
          }}
        >
          Delete Comment
        </button>
      )}
    </li>
  );
}
