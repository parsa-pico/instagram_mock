import React from "react";
import { useNavigate } from "react-router-dom";
import backArrow from "../Images/Icons/back-arrow.svg";
import addPersonIcon from "../Images/Icons/addPerson.svg";
import useGroups from "../hooks/useGroups";
import { Button } from "react-bootstrap";
export default function GroupInfoBar({ currentGroup }) {
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
        <div
          onClick={() => navigate(`/user/groups/${currentGroup.id}/add-member`)}
          className="group-info__add-member-wrapper"
        >
          <img
            className="img-fluid group-info__add-member"
            src={addPersonIcon}
          />
        </div>
      </div>
    </>
  );
}
