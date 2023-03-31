import React, { useState } from "react";
import useUser from "./../hooks/useUser";
import useGroups from "./../hooks/useGroups";
import { Button } from "react-bootstrap";

export default function GroupInput({ currentGroup, setCurrentGroup }) {
  const [users, setUsers, currentUser] = useUser();
  const [groups, setGroups] = useGroups();
  const [text, setText] = useState("");

  function handleSend() {
    const groupsCopy = [...groups];
    const currentGroupCopy = { ...currentGroup };
    currentGroupCopy.chats = [...currentGroup.chats];
    currentGroupCopy.chats.push({ senderId: currentUser.id, messeage: text });
    groupsCopy[currentGroup.id] = currentGroupCopy;
    setCurrentGroup(currentGroupCopy);
    setGroups(groupsCopy);
    setText("");
  }

  return (
    <div id="group-input-wrapper">
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
