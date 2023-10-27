import { Link } from "react-router-dom";
import { useContext } from "react";
import { User } from "../contexts/User";

export default function Header() {
  const { currentUser, setCurrentUser } = useContext(User);
  return (
    <div>
      <Link to={"/"}>
        <h1 className="header">NC News</h1>
      </Link>
      {currentUser && (
        <div className="logged-in-wrapper">
          <p>Logged in as {currentUser}</p>
          <button onClick={() => setCurrentUser(null)}>Log Out</button>
        </div>
      )}
    </div>
  );
}
