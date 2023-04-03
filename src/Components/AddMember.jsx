import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Zoom } from "react-toastify";
import useGroups from "../hooks/useGroups";
import useUser from "../hooks/useUser";
import searchIcon from "../Images/Icons/search.svg";
import backArrow from "../Images/Icons/back-arrow.svg";

export default function AddMember() {
  const navigate = useNavigate();
  const [users, setUsers, currentUser, setCurrentUser] = useUser();
  const [groups, setGroups, currentGroup, setCurrentGroup] = useGroups();
  const [foundUsers, setFoundUsers] = useState([]);

  function search(value) {
    if (value === "") return setFoundUsers([]);
    const filterd = users.filter((user) =>
      user.username.toLowerCase().includes(value.toLowerCase())
    );

    setFoundUsers(filterd);
  }
  function addMember(userId) {
    const groupsCopy = [...groups];
    const currentGroupCopy = { ...currentGroup };

    currentGroupCopy.members = [...currentGroup.members];

    currentGroupCopy.members.push(userId);
    groupsCopy[currentGroup.id] = currentGroupCopy;
    setCurrentGroup(currentGroupCopy);
    setGroups(groupsCopy);
    toast.success("member added");
  }

  return (
    <div id="add-member">
      <img
        onClick={() => navigate(`/user/groups/${currentGroup.id}/info`)}
        className="img-fluid group-bar__arrow group-info__arrow "
        src={backArrow}
      />
      <ToastContainer autoClose={1000} transition={Zoom} />
      <h4 className="search-heading">Add Member</h4>
      <div className="form-group">
        <div className="search-wrapper">
          <input
            onChange={({ target }) => search(target.value)}
            className="form-control search-input "
            id="username"
            placeholder="search"
          />

          <img className="img-fluid search-btn" src={searchIcon} />
        </div>
      </div>
      <div className="found-users-wrapper">
        {foundUsers.length !== 0 &&
          foundUsers.map((user, idx) => {
            const isMember = currentGroup.members.includes(user.id);

            return (
              <div key={idx} className="add-friend-user">
                <div className="flex-row">
                  <Image className="post__avatar" fluid src={user.avatar} />
                  <h6 className="req__heading">
                    {user.username}
                    &nbsp; &nbsp;
                    {isMember && (
                      <small style={{ fontSize: "0.8rem", color: "grey" }}>
                        member
                      </small>
                    )}
                  </h6>
                </div>

                {!isMember && (
                  <Button
                    onClick={() => addMember(user.id)}
                    className="send-req-btn"
                  >
                    Add
                  </Button>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
