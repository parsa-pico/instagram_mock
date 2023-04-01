import React, { useState } from "react";
import useUser from "./../hooks/useUser";
import useChats from "./../hooks/useChats";
import { Button } from "react-bootstrap";

export default function ChatInput({ currentChat, setCurrentChat }) {
  const [users, setUsers, currentUser] = useUser();
  const [chats, setChats] = useChats();
  const [text, setText] = useState("");

  function handleSend() {
    const chatsCopy = [...chats];
    const currentChatCopy = { ...currentChat };
    currentChatCopy.messeages = [...currentChat.messeages];
    currentChatCopy.messeages.push({
      senderId: currentUser.id,
      messeage: text,
    });
    chatsCopy[currentChat.id] = currentChatCopy;
    setCurrentChat(currentChatCopy);
    setChats(chatsCopy);
    setText("");
  }

  return (
    <div className="group-input-wrapper">
      <textarea
        value={text}
        placeholder="write your messeage"
        className="form-control group-input"
        type="text"
        onChange={({ target }) => setText(target.value)}
      />
      <Button
        onClick={handleSend}
        disabled={text === ""}
        className="group-input-btn"
      >
        send
      </Button>
    </div>
  );
}
