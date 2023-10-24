import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { CurrentArticle } from "./contexts/CurrentArticle";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import ArticlePage from "./components/ArticlePage";

export default function App() {
  const { currentArticle } = useContext(CurrentArticle);

  return (
    <main>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={`/article-${currentArticle.article_id}`}
          element={<ArticlePage />}
        />
      </Routes>
    </main>
  );
}
