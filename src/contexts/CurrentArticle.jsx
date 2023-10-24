import { createContext, useState } from "react";

export const CurrentArticle = createContext();

export function CurrentArticleProvider({ children }) {
  const [currentArticle, setCurrentArticle] = useState("");

  return (
    <CurrentArticle.Provider value={{ currentArticle, setCurrentArticle }}>
      {children}
    </CurrentArticle.Provider>
  );
}
