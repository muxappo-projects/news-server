import { Link } from "react-router-dom";
import { useContext } from "react";
import { Loading } from "../contexts/Loading";

export default function Header() {
  return (
    <Link to={"/"}>
      <h1>NC News</h1>
    </Link>
  );
}
