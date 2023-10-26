import CommentCard from "./CommentCard";
import { Link } from "react-router-dom";
import { forwardRef, useEffect, useState, useContext } from "react";
import { User } from "../contexts/User";
import CommentField from "./CommentField";

const CommentSection = forwardRef(({ commentsList, setCommentsList }, ref) => {
  const [postComment, setPostComment] = useState(false);
  const { currentUser } = useContext(User);

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section ref={ref} className="comment-section">
      {currentUser ? (
        <button onClick={() => setPostComment(!postComment)}>
          {postComment ? "Cancel" : "Post comment"}
        </button>
      ) : (
        <Link to="/login">
          <button>Log In to Post a Comment</button>
        </Link>
      )}

      {postComment && <CommentField setCommentsList={setCommentsList} />}

      <ul>
        {commentsList.map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              body={comment.body}
              author={comment.author}
              votes={comment.votes}
              created_at={comment.created_at}
              id={comment.comment_id}
            />
          );
        })}
      </ul>
    </section>
  );
});

export default CommentSection;
