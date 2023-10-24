import ArticleList from "./ArticleList";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>(Nav Bar will go here)</p>
      <NavBar />
      <ArticleList />
    </div>
  );
}
