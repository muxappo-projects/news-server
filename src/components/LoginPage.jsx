import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../contexts/User";

export default function LoginPage() {
  const [userInput, setUserInput] = useState("");
  const { setCurrentUser } = useContext(User);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setCurrentUser(userInput);
    navigate(-1);
  }

  return (
    <form onSubmit={handleSubmit}>
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
