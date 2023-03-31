import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import backArrow from "../Images/Icons/back-arrow.svg";

export default function GroupBar({ currentGroup }) {
  const navigate = useNavigate();

  function countMembers() {
    return currentGroup.members.length;
  }
  function showGroupInfo() {
    navigate(`/user/groups/${currentGroup.id}/info`);
  }
  return (
    <div className="flex-row group-bar">
      <div onClick={() => navigate("/user/groups")}>
        <img className="img-fluid group-bar__arrow" src={backArrow} alt="" />
      </div>
      <div onClick={showGroupInfo}>
        <img
          className="img-fluid group-bar__img"
          src={currentGroup && currentGroup.avatar}
        />
      </div>
      <div onClick={showGroupInfo} className="group-bar__header">
        <h5 className="group-bar__heading">
          {currentGroup && currentGroup.name}
        </h5>
        <small className="group-bar__caption">
          {currentGroup && countMembers()} members
        </small>
      </div>
    </div>
  );
}
