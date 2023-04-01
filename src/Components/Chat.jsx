import React, { useEffect, useState } from "react";
import useChats from "../hooks/useChats";
import ChatBar from "./ChatBar";
import useUser from "./../hooks/useUser";
import ChatContext from "./ChatContext";
import ChatInput from "./ChatInput";

export default function Chat() {
  const [chats, setChats, currentChat, setCurrentChat] = useChats();
  const [users, SetUsers, currentUser, setCurrentUser] = useUser();
  const [participant, setParticipant] = useState();

  useEffect(() => {
    document.getElementById("user-footer").className = "hidden display-none";
    return () => {
      document.getElementById("user-footer").className = "";
    };
  }, []);

  useEffect(() => {
    if (currentChat) {
      const p = getParticipant(currentChat);
      setParticipant(p);
    }
  }, [currentChat]);

  function getParticipant(chat) {
    const id = chat.members.find((id) => id !== currentUser.id);
    const participant = users.find((user) => user.id === id);
    return participant;
  }

  return (
    <div className="group">
      <ChatBar participant={participant} currentChat={currentChat} />
      <ChatContext currentChat={currentChat} />
      <ChatInput currentChat={currentChat} setCurrentChat={setCurrentChat} />
    </div>
  );
}
