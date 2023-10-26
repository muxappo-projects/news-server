import axios from "axios";

const request = axios.create({
  baseURL: "https://news-api-oery.onrender.com/api",
});

export function fetchArticles(topic, sortby, order) {
  let queryParams = [];

  if (topic) {
    queryParams.push(`topic=${topic}`);
  }
  if (sortby) {
    queryParams.push(`sortby=${sortby}`);
  }
  if (order) {
    queryParams.push(`order=${order}`);
  }

  const queryStr = queryParams.length ? `?${queryParams.join("&")}` : "";

  return request.get(`/articles${queryStr}`).then(({ data }) => {
    return data;
  });
}

export function fetchTopics() {
  return request.get("/topics").then(({ data }) => {
    return data;
  });
}

export function fetchArticleById(id) {
  return request.get(`/articles/${id}`).then(({ data }) => {
    return data;
  });
}

export function fetchComments(id) {
  return request.get(`/articles/${id}/comments`).then(({ data }) => {
    return data;
  });
}

export function incVotes(value, id) {
  return request.patch(`/articles/${id}`, { inc_votes: value }).then(
    ({
      data: {
        article: { votes },
      },
    }) => {
      return votes;
    }
  );
}

export function postComment(name, comment, id) {
  return request
    .post(`/articles/${id}/comments`, {
      username: name,
      commentBody: comment,
    })
    .then(({ data: { created_comment } }) => {
      return created_comment;
    });
}

export function deleteComment(id) {
  return request.delete(`/comments/${id}`);
}
