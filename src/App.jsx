import { Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";
import { CurrentArticle } from "./contexts/CurrentArticle";
import Header from "./components/Header";
import Home from "./components/Home";
import ArticlePage from "./components/ArticlePage";
import ArticleList from "./components/ArticleList";
import Topics from "./components/Topics";
import LoginPage from "./components/LoginPage";
import ErrorPage from "./components/ErrorPage";
import "./App.css";

export default function App() {
  const { currentArticle } = useContext(CurrentArticle);

  return (
    <main>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path={`/articles/:id`} element={<ArticlePage />} />
        <Route path="/topics" element={<Topics />} />
        <Route path={`/topics/:topic/articles`} element={<ArticleList />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
}
