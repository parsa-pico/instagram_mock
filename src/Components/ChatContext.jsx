import React, { useEffect } from "react";
import { getUser } from "../utils/commonFunctions";
import useUser from "./../hooks/useUser";

export default function ChatContext({ currentChat }) {
  const [users, setUsers, currentUser] = useUser();

  useEffect(() => {
    document
      .getElementById("group-chat-last")
      .scrollIntoView({ behavior: "auto" });
  });
  return (
    <div className="group-chat">
      {currentChat &&
        currentChat.messeages.map((chat, idx) => {
          const user = getUser(chat.senderId, users);
          const isCurrentUser = user.id === currentUser.id ? true : false;
          let wrapperClass = "person-chat-wrapper ";
          wrapperClass += isCurrentUser
            ? " person-chat-wrapper--current-user"
            : "";
          return (
            <div key={idx} className={wrapperClass}>
              <div className="person-chat-header">
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
      <div style={{ height: "50px", opacity: 0 }}>&nbsp;</div>
      <div id="group-chat-last"></div>
    </>
  );
}
