import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Link to="/articles">
        <button>Browse Articles</button>
      </Link>
    </div>
  );
}
