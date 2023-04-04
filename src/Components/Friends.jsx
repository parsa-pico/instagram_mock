import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "./../hooks/useUser";
import { Button, Image } from "react-bootstrap";
import { currentUserId, getUser } from "../utils/commonFunctions";

export default function Friends() {
  const [users, setUsers, currentUser, setCurrentUser] = useUser();
  const [removeContactIndex, setRemoveContactIndex] = useState(null);
  const navigate = useNavigate();

  function removeContact(friendIndex) {
    const index = currentUserId();
    const usersCopy = [...users];
    let currentUserCopy = { ...currentUser };
    currentUserCopy.friends = [...currentUserCopy.friends];
    currentUserCopy.friends[friendIndex] = {
      ...currentUser.friends[friendIndex],
    };
    currentUserCopy.friends.splice(friendIndex, 1);
    usersCopy[index] = currentUserCopy;
    setUsers(usersCopy);
    setCurrentUser(currentUserCopy);
  }
  return (
    <div
      onClick={(e) => {
        //ntc means not white space
        if (!e.target.className.includes("ntc")) setRemoveContactIndex(null);
      }}
      id="friends"
    >
      <h1>friends</h1>
      {currentUser &&
        currentUser.friends &&
        currentUser.friends.length !== 0 &&
        currentUser.friends.map((friendObj, idx) => {
          const friend = getUser(friendObj.userId, users);
          const firstName = friendObj.givenFirstName;
          const lastName = friendObj.givenLastName;
          const name =
            firstName || lastName
              ? `${firstName} ${lastName}`
              : friend.username;
          const isFriend = friendObj.situation === "accepted";
          if (isFriend)
            return (
              <div
                onClick={() => setRemoveContactIndex(idx)}
                key={idx}
                className="req-wrapper friends-wrapper ntc"
              >
                <div className="flex-row ntc">
                  <Image
                    className="post__avatar ntc"
                    fluid
                    src={friend.avatar}
                  />
                  <h6 className="req__heading ntc">{name}</h6>
                </div>
                {removeContactIndex === idx && (
                  <Button
                    onClick={() => removeContact(idx)}
                    variant="danger ntc"
                    className=""
                  >
                    remove contact
                  </Button>
                )}
              </div>
            );
        })}
    </div>
  );
}
