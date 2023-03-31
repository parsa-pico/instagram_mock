import React from "react";
import { useNavigate } from "react-router-dom";
import backArrow from "../Images/Icons/back-arrow.svg";
import useGroups from "../hooks/useGroups";
export default function UserInfoBar({ currentGroup }) {
  const [groups, setGroups] = useGroups();
  function countMembers() {
    return currentGroup.members.length;
  }

  const navigate = useNavigate();
  return (
    <>
      <div className="flex-row group-bar group-info-bar-wrapper">
        <img
          onClick={() => navigate(`/user/groups/${currentGroup.id}`)}
          className="img-fluid group-bar__arrow group-info__arrow "
          src={backArrow}
          alt=""
        />

        <div>
          <div style={{ height: "50px" }}></div>
          <div className="group-info-bar">
            <img
              className="img-fluid group-bar__img group-info__img"
              src={currentGroup && currentGroup.avatar}
            />

            <div className="group-bar__header group-info-header">
              <h5 className="group-bar__heading group-info-heading">
                {currentGroup && currentGroup.name}
              </h5>
              <small className="group-bar__caption group-info-caption">
                {currentGroup && countMembers()} members
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
