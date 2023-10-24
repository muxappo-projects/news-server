import { Link } from "react-router-dom";
import { useContext } from "react";
import { Loading } from "../contexts/Loading";

export default function Header() {
  const { setIsLoading } = useContext(Loading);

  return (
    <Link to={"/"} onClick={() => setIsLoading(true)}>
      <h1>NC News</h1>
    </Link>
  );
}
