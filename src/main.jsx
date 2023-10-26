import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CurrentArticleProvider } from "./contexts/CurrentArticle.jsx";
import { UserProvider } from "./contexts/User.jsx";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CurrentArticleProvider>
          <App />
        </CurrentArticleProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
