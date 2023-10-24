import request from "axios";

export function fetchAllArticles() {
  return request
    .get("https://news-api-oery.onrender.com/api/articles")
    .then(({ data }) => {
      return data;
    });
}
