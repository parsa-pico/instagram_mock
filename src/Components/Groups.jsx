import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import useUser from "../hooks/useUser";
import useGroups from "../hooks/useGroups";

export default function Groups() {
  const [groups, setGroups] = useGroups();
  const [users, setUsers, currentUser] = useUser();
  const navigate = useNavigate();

  function getLastChat(group) {
    const lastChatLength = group.chats[group.chats.length - 1].messeage.length;
    const lastChat =
      group.chats[group.chats.length - 1].messeage.slice(0, 20) +
      (lastChatLength > 20 ? "..." : "");
    const senderId = group.chats[group.chats.length - 1].senderId;
    const senderName =
      senderId === currentUser.id
        ? "You"
        : users.find((user) => user.id === senderId).username;
    return [senderName, lastChat];
  }

  function showGroup(id) {
    navigate(`/user/groups/${id}`);
  }

  return (
    <div className="groups">
      <h2 style={{ marginLeft: "1rem" }}>Groups</h2>
      {groups &&
        groups
          .filter((group) => group.members.includes(currentUser.id))
          .map((group, idx) => {
            const [senderName, lastChat] = getLastChat(group);

            return (
              <div
                onClick={() => showGroup(group.id)}
                key={idx}
                className="groups__row"
              >
                <div>
                  <img className="img-fluid groups__img" src={group.avatar} />
                </div>
                <div className="groups__header">
                  <h2 className="groups__heading">{group.name}</h2>
                  <div>
                    <p className="groups__sender">{senderName}</p>:{lastChat}
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
}
