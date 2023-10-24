import CommentCard from "./CommentCard";
import { forwardRef, useEffect } from "react";

const CommentSection = forwardRef(({ commentsList, commentCount }, ref) => {
  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section ref={ref}>
      <h4>Comments: {commentCount}</h4>
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
