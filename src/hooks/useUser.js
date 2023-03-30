import { useContext, useEffect, useState } from "react";
import useresContext from "../Context/useresContext";

export default function useUser() {
  const [currentUser, setCurrentUser] = useState({});
  const [users, setUsers] = useContext(useresContext);

  useEffect(() => {
    const index = localStorage.getItem("currentUserIndex");
    setCurrentUser(users[index]);
  }, []);
  return [users, setUsers, currentUser, setCurrentUser];
}
