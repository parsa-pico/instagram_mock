import React, { useEffect, useState } from "react";
import { getUser } from "../utils/commonFunctions";
import useUser from "./../hooks/useUser";

export default function GroupChat({
  currentGroup,
  setShowChatMenu,
  setSelectedText,
}) {
  const [users, setUsers, currentUser] = useUser();

  useEffect(() => {
    setTimeout(() => {
      document
        .getElementById("group-chat-last")
        .scrollIntoView({ behavior: "auto" });
    }, 50);
  }, []);

  function computeX(e) {
    const app = document.getElementById("app");
    let actualOffsetLeft = app.offsetLeft - app.clientWidth / 2.0;
    //temporary
    actualOffsetLeft = 0;
    const chatMenu = document.getElementById("chat-menu");
    let localPosition = e.clientX - actualOffsetLeft;
    //after 60 percent of mobile width
    if (localPosition > 0.6 * app.clientWidth)
      localPosition -= chatMenu.clientWidth;
    return localPosition;
  }

  function computeY(e) {
    const app = document.getElementById("app");
    let actualOffsetTop = app.offsetTop - app.clientHeight / 2.0;
    //temporary
    actualOffsetTop = 0;
    actualOffsetTop += document.getElementById("user-header").clientHeight;
    console.log(actualOffsetTop);
    const localPosition = e.clientY - actualOffsetTop;
    return localPosition;
  }
  function setMenuPosition(e) {
    let x = computeX(e);
    let y = computeY(e);

    const element = document.getElementById("chat-menu");
    element.style.left = x + "px";
    element.style.top = y + "px";
  }
  function handleChatMenu(e, text, index) {
    setShowChatMenu(true);
    setSelectedText({ text, index });
    setMenuPosition(e);
  }
  return (
    <div
      onClick={(e) => {
        const condition = e.target.className !== "person-chat-caption";

        if (condition) {
          setShowChatMenu(false);
        }
      }}
      className="group-chat"
      id="__group-chat"
    >
      {currentGroup &&
        currentGroup.chats.map((chat, idx) => {
          const user = getUser(chat.senderId, users);
          const isCurrentUser = user.id === currentUser.id ? true : false;
          let wrapperClass = "person-chat-wrapper ";
          wrapperClass += isCurrentUser
            ? " person-chat-wrapper--current-user"
            : "";
          return (
            <div id={"group-chat-" + idx} key={idx} className={wrapperClass}>
              {!isCurrentUser && (
                <img className="person-chat-img" src={user.avatar} />
              )}
              <div className="person-chat-header">
                {!isCurrentUser && (
                  <h6 className="person-chat-heading">{user.username}</h6>
                )}
                <p
                  onClick={(e) => handleChatMenu(e, chat.messeage, idx)}
                  className="person-chat-caption"
                >
                  {chat.messeage}
                </p>
              </div>
            </div>
          );
        })}

      <DummyLastElement />
    </div>
  );
}

function DummyLastElement() {
  return (
    <>
      <div id="group-chat-blank-space" style={{ height: "50px", opacity: 0 }}>
        &nbsp;
      </div>
      <div id="group-chat-last"></div>
    </>
  );
}
