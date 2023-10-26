import { Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";
import { CurrentArticle } from "./contexts/CurrentArticle";
import Header from "./components/Header";
import Home from "./components/Home";
import ArticlePage from "./components/ArticlePage";
import ArticleList from "./components/ArticleList";
import Topics from "./components/Topics";
import LoginPage from "./components/LoginPage";
import "./App.css";

export default function App() {
  const { currentArticle } = useContext(CurrentArticle);
  const [topic, setTopic] = useState(null);

  return (
    <main>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route
          path={`/article-${currentArticle.article_id}`}
          element={<ArticlePage />}
        />
        <Route path="/topics" element={<Topics setTopic={setTopic} />} />
        <Route
          path={`/topics/${topic}/articles`}
          element={<ArticleList topic={topic} />}
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
}
