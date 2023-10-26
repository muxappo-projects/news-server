import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../contexts/User";
import * as api from "../utils/api";

export default function LoginPage() {
  const { setCurrentUser } = useContext(User);

  const [invalidUser, setInvalidUser] = useState(false);
  const [rawUserData, setRawUserData] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [errMsg, setErrMsg] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    api
      .fetchUsers()
      .then((users) => {
        setRawUserData(users);
      })
      .catch(() => {
        setErrMsg("Error fetching user data - Please return to Home");
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
      {errMsg && <p>{errMsg}</p>}
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
