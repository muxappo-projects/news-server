import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../utils/api";
import * as util from "../utils/utils";

export default function Topics({ setTopic }) {
  const [topicsList, setTopicsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchTopics().then(({ topics }) => {
      setTopicsList(topics);
      setIsLoading(false);
    });
  }, []);

  {
    return isLoading ? (
      <p>Fetching Topics...</p>
    ) : (
      <div className="topics-page">
        <h2>Available Topics:</h2>
        <ul className="topics-wrapper">
          {topicsList.map((topic) => {
            return (
              <li key={topicsList.indexOf(topic)}>
                <Link to={`/topics/${topic.slug}/articles`}>
                  <button
                    className="topic-button"
                    onClick={() => setTopic(topic.slug)}
                  >
                    {util.formatContent(topic.slug)}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
