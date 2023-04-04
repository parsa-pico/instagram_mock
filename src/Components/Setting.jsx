import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useresContext from "../Context/useresContext";
import Interests from "./Interests";
import logoutIcon from "../Images/Icons/logout.png";
export default function Setting() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [users, setUsers] = useContext(useresContext);

  useEffect(() => {
    const index = localStorage.getItem("currentUserIndex");
    setCurrentUser(users[index]);
  }, []);
  function handleLogout() {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <div id="setting">
      <img
        onClick={handleLogout}
        src={logoutIcon}
        className="img-fluid setting__logout"
      />
      <div className="setting__profile">
        <div>
          <img
            className="img-fluid setting__avatar"
            src={currentUser.avatar}
            alt=""
          />
        </div>
        <h2 className="setting__user-name">{currentUser.username}</h2>
        <Button
          onClick={() => navigate("/user/profile")}
          className="w-100"
          variant="dark"
        >
          Edit Profile
        </Button>
      </div>
      <Interests />
    </div>
  );
}
