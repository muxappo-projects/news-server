import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <Link to="/">
        <button>Back to Safety</button>
      </Link>
      <h1>Looks like you're ahead of the news! Nothing to see here!</h1>
    </div>
  );
}
