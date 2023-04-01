import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GroupBar from "./GroupBar";
import GroupChat from "./GroupChat";
import useGroups from "../hooks/useGroups";
import GroupInput from "./GroupInput";
import GroupPin from "./GroupPin";
export default function Group() {
  const [groups, setGroups, currentGroup, setCurrentGroup] = useGroups();

  useEffect(() => {
    document.getElementById("user-footer").className = "hidden display-none";
    return () => {
      document.getElementById("user-footer").className = "";
    };
  }, []);
  function handleRemovePin() {
    document
      .getElementsByClassName("group-pin-wrapper")[0]
      .classList.add("group-pin-delete");
    setTimeout(() => {
      const groupsCopy = [...groups];
      const currentGroupCopy = { ...currentGroup };
      currentGroupCopy.pinnedChat = null;
      setGroups(groupsCopy);
      setCurrentGroup(currentGroupCopy);
    }, 450);
  }
  function showPinnedChat() {
    const element = document.getElementById(
      "group-chat-" + currentGroup.pinnedChat
    );
    element.scrollIntoView({ block: "end", behavior: "auto" });
    element.classList.add("group-chat-show-pinned");

    setTimeout(() => {
      element.classList.remove("group-chat-show-pinned");
    }, 1000);
  }
  return (
    <div className="group">
      <GroupBar currentGroup={currentGroup} />
      <GroupPin
        showPinnedChat={showPinnedChat}
        handleRemovePin={handleRemovePin}
        currentGroup={currentGroup}
      />
      <GroupChat currentGroup={currentGroup} />
      <GroupInput
        setCurrentGroup={setCurrentGroup}
        currentGroup={currentGroup}
      />
    </div>
  );
}
