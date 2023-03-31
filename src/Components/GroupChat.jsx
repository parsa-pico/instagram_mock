import React, { useEffect } from "react";
import { getUser } from "../utils/commonFunctions";
import useUser from "./../hooks/useUser";

export default function GroupChat({ currentGroup }) {
  const [users, setUsers, currentUser] = useUser();

  useEffect(() => {
    document.getElementById("group-chat-last").scrollIntoView();
  });
  return (
    <div id="group-chat">
      {currentGroup &&
        currentGroup.chats.map((chat, idx) => {
          const user = getUser(chat.senderId, users);
          const isCurrentUser = user.id === currentUser.id ? true : false;
          let wrapperClass = "person-chat-wrapper ";
          wrapperClass += isCurrentUser
            ? " person-chat-wrapper--current-user"
            : "";
          return (
            <div key={idx} className={wrapperClass}>
              {!isCurrentUser && (
                <img className="person-chat-img" src={user.avatar} />
              )}
              <div className="person-chat-header">
                {!isCurrentUser && (
                  <h6 className="person-chat-heading">{user.username}</h6>
                )}
                <p className="person-chat-caption">{chat.messeage}</p>
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
      <div style={{ height: "1px" }}></div>
      <div id="group-chat-last"></div>
    </>
  );
}
