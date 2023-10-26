import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Link to="/login">
        <button className="login-button">Login</button>
      </Link>
    </div>
  );
}
