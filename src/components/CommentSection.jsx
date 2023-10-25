import CommentCard from "./CommentCard";
import { forwardRef, useEffect, useState } from "react";
import CommentField from "./CommentField";

const CommentSection = forwardRef(({ commentsList, setCommentsList }, ref) => {
  const [postComment, setPostComment] = useState(false);

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section ref={ref} className="comment-section">
      {postComment && <CommentField setCommentsList={setCommentsList} />}
      <button onClick={() => setPostComment(!postComment)}>
        {postComment ? "Cancel" : "Post comment"}
      </button>

      <ul>
        {commentsList.map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              body={comment.body}
              author={comment.author}
              votes={comment.votes}
              created_at={comment.created_at}
            />
          );
        })}
      </ul>
    </section>
  );
});

export default CommentSection;
