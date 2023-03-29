import React, { useState } from "react";
import user from "../Images/Icons/FooterIcons/user.svg";
import group from "../Images/Icons/FooterIcons/group.svg";
import lines from "../Images/Icons/FooterIcons/lines.svg";
import chat from "../Images/Icons/FooterIcons/chat.svg";
export default function UserFooter() {
  const icons = [{ img: group }, { img: lines }, { img: chat }, { img: user }];
  const [currentIcon, setCurentIcon] = useState(1);
  return (
    <div id="user-footer">
      {icons.map((icon, index) => {
        let iconClass = "img-fluid footer-logo ";
        if (currentIcon === index) iconClass += "footer-logo--clicked";
        return (
          <span onClick={() => setCurentIcon(index)} key={index}>
            <img className={iconClass} src={icon.img} />
          </span>
        );
      })}
    </div>
  );
}
