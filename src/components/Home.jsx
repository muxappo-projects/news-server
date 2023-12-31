import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { User } from "../contexts/User";

export default function Home() {
  const { currentUser } = useContext(User);
  return (
    <div>
      <NavBar />
      {!currentUser && (
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
      )}
    </div>
  );
}
