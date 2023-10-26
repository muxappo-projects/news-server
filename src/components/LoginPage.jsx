import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../contexts/User";
import * as api from "../utils/api";

export default function LoginPage() {
  const { setCurrentUser } = useContext(User);
  const [userInput, setUserInput] = useState("");
  const [rawUserData, setRawUserData] = useState([]);
  const [invalidUser, setInvalidUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    api.fetchUsers().then((users) => {
      setRawUserData(users);
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const usernames = rawUserData.map((user) => user.username);

    if (usernames.includes(userInput)) {
      setCurrentUser(userInput);
      navigate(-1);
    }

    setInvalidUser(true);
    setTimeout(() => {
      setInvalidUser(false);
    }, 2000);
  }

  return (
    <form onSubmit={handleSubmit}>
      {invalidUser && <p>Username doesn't exist!</p>}
      <label htmlFor="username-input">Username</label>

      <input
        required
        id="username-input"
        type="text"
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />

      <button>Log In</button>
    </form>
  );
}
