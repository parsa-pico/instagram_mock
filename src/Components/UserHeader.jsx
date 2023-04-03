import React from "react";
import telegramLogo from "../Images/Icons/telegram.png";
import { useNavigate } from "react-router-dom";
export default function UserHeader() {
  const navigate = useNavigate();
  return (
    <div id="user-header">
      <h3>common interests </h3>
      <div onClick={() => navigate("/user/chats")}>
        <img className="img-fluid telegram-logo" src={telegramLogo} alt="" />
      </div>
    </div>
  );
}
