import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

export default function App() {
  return (
    <main>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}
