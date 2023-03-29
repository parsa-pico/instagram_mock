import React from "react";
import user from "../Images/Icons/FooterIcons/user.svg";
import group from "../Images/Icons/FooterIcons/group.svg";
import lines from "../Images/Icons/FooterIcons/lines.svg";
import chat from "../Images/Icons/FooterIcons/chat.svg";
export default function UserFooter() {
  const images = [user, group, lines, chat];
  return (
    <div id="user-footer">
      {images.map((img, index) => {
        return (
          <span key={index}>
            <img className="img-fluid footer-logo" src={img} />
          </span>
        );
      })}
    </div>
  );
}
