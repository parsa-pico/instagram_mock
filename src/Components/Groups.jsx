import React from "react";
import { Col, Row } from "react-bootstrap";
import groups from "../DataBase/groups.json";
import useUser from "../hooks/useUser";
export default function Groups() {
  const [users] = useUser();
  return (
    <div id="groups">
      {groups.map((group, idx) => {
        const lastChatLength =
          group.chats[group.chats.length - 1].messeage.length;
        const lastChat =
          group.chats[group.chats.length - 1].messeage.slice(0, 20) +
          (lastChatLength > 20 ? "..." : "");
        const senderId = group.chats[group.chats.length - 1].senderId;
        const senderName = users.find((user) => user.id === senderId).username;
        return (
          <div key={idx} className="groups__row">
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
