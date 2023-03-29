import React, { useContext, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useresContext from "../Context/useresContext";

export default function Profile() {
  const [currentUser, setCurrentUser] = useState({});
  const [users, setUsers] = useContext(useresContext);
  const navigate = useNavigate();
  useEffect(() => {
    const index = localStorage.getItem("currentUserIndex");
    setCurrentUser(users[index]);
  }, []);

  function handleSubmit(e) {
    if (e) e.preventDefault();
    const index = localStorage.getItem("currentUserIndex");
    const useresCopy = [...users];
    // useresCopy[index] = { ...useresCopy[index] }; // i think this is unnecessary
    useresCopy[index] = currentUser;
    setUsers(useresCopy);
    navigate("/user/setting");
  }
  console.log(users);
  return (
    <div id="profile">
      <form onSubmit={(e) => handleSubmit(e)} className="profile__form">
        <div className="form-group">
          <label htmlFor="username">
            <small>user name:</small>
          </label>
          <input
            onChange={({ target }) =>
              setCurrentUser({ ...currentUser, username: target.value })
            }
            className="form-control profile__input"
            id="username"
            placeholder="Enter desired name"
            value={currentUser.username || ""}
          />
        </div>
        <Button onClick={handleSubmit} className="mt-2">
          save
        </Button>
      </form>
    </div>
  );
}
