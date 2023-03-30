import React, { useEffect, useState } from "react";
import user from "../Images/Icons/FooterIcons/user.svg";
import group from "../Images/Icons/FooterIcons/group.svg";
import lines from "../Images/Icons/FooterIcons/lines.svg";
import contact from "../Images/Icons/FooterIcons/chat.svg";
import { useNavigate } from "react-router-dom";
export default function UserFooter() {
  const icons = [
    { img: group, link: "/user/groups" },
    { img: lines, link: "/user/feed" },
    { img: contact, link: "/user/contact" },
    { img: user, link: "/user/setting" },
  ];

  const [currentIcon, setCurrentIcon] = useState(1);
  const navigate = useNavigate();
  function handleClick(index) {
    setCurrentIcon(index);
    navigate(icons[index].link);
  }
  return (
    <div id="user-footer">
      {icons.map((icon, index) => {
        let iconClass = "img-fluid footer-logo ";
        if (currentIcon === index) iconClass += "footer-logo--clicked";
        return (
          <span onClick={() => handleClick(index)} key={index}>
            <img className={iconClass} src={icon.img} />
          </span>
        );
      })}
    </div>
  );
}
