import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function UserInfo() {
  const userName = useContext(UserContext);
  console.log(userName);
  return <span></span>;
}
