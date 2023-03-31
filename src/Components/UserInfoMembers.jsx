import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import useGroups from "../hooks/useGroups";
import useUser from "./../hooks/useUser";
import trash from "../Images/Icons/trash2.png";
export default function UserInfoMembers({
  selectedMember,
  setSelectedMember,
  closeModal,
  showModal,
  currentGroup,
}) {
  const [groups, setGroups] = useGroups();
  const [users, setUsers, currentUser] = useUser();

  return (
    <div className="group-members">
      {currentGroup &&
        currentGroup.members.map((memberId, idx) => {
          const member = users.find((user) => user.id === memberId);
          const isCurrentUser = memberId === currentUser.id;
          return (
            <div
              onClick={() => {
                setSelectedMember(memberId);
              }}
              key={idx}
              className="post__header group-info__member"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={memberId}
            >
              <Image
                className="post__avatar"
                fluid
                src={member.avatar}
                alt=""
              />
              <h5>
                {member.username}
                {isCurrentUser && <small className="you">&nbsp; you</small>}
              </h5>
              {selectedMember === memberId && !isCurrentUser && (
                <div className="group-member-options">
                  <Button
                    onClick={showModal}
                    variant="danger"
                    className="group-member-remove"
                  >
                    <img src={trash} className="img-fluid user-member-trash" />
                    remove
                  </Button>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}
