import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import backArrow from "../Images/Icons/back-arrow.svg";

export default function ChatBar({ currentChat, participant }) {
  const navigate = useNavigate();

  function showContact() {
    // navigate(`/user/groups/${currentGroup.id}/info`);
  }
  return (
    <div className="flex-row group-bar">
      <div onClick={() => navigate("/user/chats")}>
        <img className="img-fluid group-bar__arrow" src={backArrow} />
      </div>
      <div onClick={showContact}>
        <img
          className="img-fluid group-bar__img"
          src={participant && participant.avatar}
        />
      </div>
      <div onClick={showContact} className="group-bar__header">
        <h5 className="group-bar__heading">
          {participant && participant.username}
        </h5>
        {/* <small className="group-bar__caption">
        
        </small> */}
      </div>
    </div>
  );
}
