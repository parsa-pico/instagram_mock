import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import useGroups from "../hooks/useGroups";
import backArrow from "../Images/Icons/back-arrow.svg";
import useUser from "./../hooks/useUser";

export default function GroupInfo() {
  const [groups, setGroups, currentGroup, setCurrentGroup] = useGroups();
  const [users, setUsers, currentUser] = useUser();
  const [barHeight, setBarHeight] = useState();
  const navigate = useNavigate();

  function countMembers() {
    return currentGroup.members.length;
  }

  useEffect(() => {
    setTimeout(() => {
      const element = document.getElementsByClassName(
        "group-info-bar-wrapper"
      )[0];
      element.classList.add("animation-none");
      console.log(element.height);
      setBarHeight(element.clientHeight + 20);
    }, 1);
  }, []);
  return (
    <div className="group " id="group-info">
      <Bar />
      <div style={{ height: barHeight, flexShrink: 0 }}>.</div>
      <Members />
    </div>
  );

  function Members() {
    return (
      <div className="group-members">
        {currentGroup &&
          currentGroup.members.map((memberId, idx) => {
            const member = users.find((user) => user.id === memberId);
            return (
              <div key={idx} className="post__header">
                <Image
                  className="post__avatar"
                  fluid
                  src={member.avatar}
                  alt=""
                />
                <h5>{member.username}</h5>
              </div>
            );
          })}
      </div>
    );
  }

  function Bar() {
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
}
