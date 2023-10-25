import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to={"/topics"}>
        <button>Browse By Topic</button>
      </Link>
      <Link to="/articles">
        <button>Browse All Articles</button>
      </Link>
    </nav>
  );
}
