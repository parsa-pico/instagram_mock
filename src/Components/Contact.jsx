import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import FriendReq from "./FriendReq";

export default function Contact() {
  const [users, setUsers, currentUser, setCurrentUser] = useUser();
  const navigate = useNavigate();
  return (
    <div id="contact">
      <FriendReq />
      <Button
        onClick={() => navigate("/user/add-friend")}
        className="req__plus"
      >
        Add new friend
      </Button>
    </div>
  );
}
