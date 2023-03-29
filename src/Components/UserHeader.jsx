import React from "react";
import telegramLogo from "../Images/Icons/telegram.png";
export default function UserHeader() {
  return (
    <div id="user-header">
      <h3>social media </h3>
      <div>
        <img className="img-fluid telegram-logo" src={telegramLogo} alt="" />
      </div>
    </div>
  );
}
