import * as api from "../utils/api";
import { useContext, useState } from "react";
import { CurrentArticle } from "../contexts/CurrentArticle";

export default function Voter() {
  const { currentArticle } = useContext(CurrentArticle);
  const [voteDifference, setVoteDifference] = useState(0);
  const [voteCount, setVoteCount] = useState(currentArticle.votes);

  function updateVotes(value) {
    setVoteDifference((oldState) => oldState + value);
    setVoteCount((oldState) => oldState + value);

    api.incVotes(value, currentArticle.article_id).then((votes) => {
      setVoteCount(votes);
    });
  }

  return (
    <section>
      <button
        disabled={voteDifference === 1}
        onClick={() => {
          updateVotes(1);
        }}
      >
        +
      </button>
      <p>{voteCount}</p>
      <button
        disabled={voteDifference === -1}
        onClick={() => {
          updateVotes(-1);
        }}
      >
        -
      </button>
    </section>
  );
}
