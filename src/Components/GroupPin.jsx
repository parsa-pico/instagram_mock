import React, { useEffect, useState } from "react";
import pinIcon from "../Images/Icons/pin.webp";
import crossIcon from "../Images/Icons/plus.png";
export default function GroupPin({
  currentGroup,
  handleRemovePin,
  showPinnedChat,
}) {
  const [pinnedChat, setPinnedChat] = useState(null);
  useEffect(() => {
    if (currentGroup) {
      const index = currentGroup.pinnedChat;

      if (index !== null) {
        let chat = { ...currentGroup.chats[index] };

        if (chat) {
          const secondPart = chat.messeage.length > 20 ? "..." : " ";

          chat.messeage = chat.messeage.slice(0, 20) + secondPart;
        }

        setPinnedChat(chat);
      } else {
        setPinnedChat(null);
      }
    }
  }, [currentGroup]);

  return (
    <>
      {pinnedChat && (
        <div className="group-pin-wrapper ">
          <div className="group-pin">
            <img className="img-fluid group-pin-icon" src={pinIcon} />
            <p onClick={showPinnedChat} className="group-pin-caption">
              {pinnedChat.messeage}
            </p>
            <img
              onClick={handleRemovePin}
              className="img-fluid group-pin-cross"
              src={crossIcon}
              alt=""
            />
          </div>
        </div>
      )}
    </>
  );
}
