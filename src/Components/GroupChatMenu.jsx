import React, { useEffect, useState } from "react";
import pinIcon from "../Images/Icons/pin.webp";
import copyIcon from "../Images/Icons/copy.svg";
export default function GroupChatMenu({
  show,
  setShow,
  selectedText,
  groupsState,
  currentGroupState,
}) {
  const [menuClass, setMenuClass] = useState("hidden far-top");

  useEffect(() => {
    if (show) setMenuClass("visible ");
    else setMenuClass("hidden far-top");
  }, [show]);

  function copyText() {
    navigator.clipboard.writeText(selectedText.text);
    setShow(false);
  }
  function pinText() {
    const [groups, setGroups] = groupsState;
    const [currentGroup, setCurrentGroup] = currentGroupState;
    const groupsCopy = [...groups];
    const currentGroupCopy = { ...currentGroup };
    currentGroupCopy.pinnedChat = selectedText.index;
    setGroups(groupsCopy);
    setCurrentGroup(currentGroupCopy);
    setShow(false);
  }

  return (
    <>
      <div id="chat-menu" className={menuClass}>
        <div onClick={pinText} className="chat-menu__item">
          <img className="img-fluid chat-menu__item__pin-icon" src={pinIcon} />
          pin messeage
        </div>
        <div onClick={copyText} className="chat-menu__item">
          <img
            className="img-fluid chat-menu__item__copy-icon"
            src={copyIcon}
          />
          copy text
        </div>
      </div>
    </>
  );
}
