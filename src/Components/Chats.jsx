import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import useUser from "../hooks/useUser";
import useChats from "../hooks/useChats";

export default function Chats() {
  const [chats, setChats] = useChats();
  const [users, setUsers, currentUser] = useUser();

  const navigate = useNavigate();

  function getLastChat(chat) {
    const lastChatLength =
      chat.messeages[chat.messeages.length - 1].messeage.length;
    const lastChat =
      chat.messeages[chat.messeages.length - 1].messeage.slice(0, 20) +
      (lastChatLength > 20 ? "..." : "");
    const senderId = chat.messeages[chat.messeages.length - 1].senderId;
    const senderName =
      senderId === currentUser.id
        ? "You"
        : users.find((user) => user.id === senderId).username;
    return [senderName, lastChat];
  }

  function showChat(id) {
    navigate(`/user/chats/${id}`);
  }
  function getParticipant(chat) {
    const id = chat.members.find((id) => id !== currentUser.id);
    const participant = users.find((user) => user.id === id);
    return participant;
  }
  return (
    <div className="groups">
      {chats.map((chat, idx) => {
        const [senderName, lastChat] = getLastChat(chat);
        const participant = getParticipant(chat);
        return (
          <div
            onClick={() => showChat(chat.id)}
            key={idx}
            className="groups__row"
          >
            <div>
              <img className="img-fluid groups__img" src={participant.avatar} />
            </div>
            <div className="groups__header">
              <h2 className="groups__heading">{participant.username}</h2>
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
