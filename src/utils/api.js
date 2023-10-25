import axios from "axios";

const request = axios.create({
  baseURL: "https://news-api-oery.onrender.com/api",
});

export function fetchAllArticles() {
  return request.get("/articles").then(({ data }) => {
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
