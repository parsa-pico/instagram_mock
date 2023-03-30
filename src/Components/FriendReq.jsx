import React, { useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import useUser from "../hooks/useUser";
import { currentUserId } from "../utils/commonFunctions";

export default function FriendReq() {
  const [users, setUsers, currentUser, setCurrentUser] = useUser();

  function accpetFriend(reqIndex) {
    const index = currentUserId();
    const usersCopy = [...users];
    let currentUserCopy = { ...currentUser };
    currentUserCopy.friends = [...currentUserCopy.friends];
    currentUserCopy.friends[reqIndex].situation = "accpeted";
    usersCopy[index] = currentUserCopy;
    setUsers(usersCopy);
    setCurrentUser(currentUserCopy);
  }

  function rejecetFriend(reqIndex) {
    const index = currentUserId();
    const usersCopy = [...users];
    let currentUserCopy = { ...currentUser };
    currentUserCopy.friends = [...currentUserCopy.friends];
    currentUserCopy.friends[reqIndex] = { ...currentUser.friends[reqIndex] };
    currentUserCopy.friends.splice(reqIndex, 1);
    usersCopy[index] = currentUserCopy;
    setUsers(usersCopy);
    setCurrentUser(currentUserCopy);
  }

  return (
    <div id="friend-req">
      <h3 className="friend-req__heading">Friend requests</h3>
      {currentUser &&
        currentUser.friends &&
        !currentUser.friends.find((req) => req.situation === "pending") && (
          <h5 style={{ marginTop: "5rem" }}>currently you have no requests</h5>
        )}
      <div className="requests">
        {currentUser &&
          currentUser.friends &&
          currentUser.friends.map((req, idx) => {
            if (req.situation === "pending") {
              const user = users[req.userId];

              return (
                <div key={idx} className="req-wrapper">
                  <Image className="post__avatar" fluid src={user.avatar} />
                  <h6 className="req__heading">
                    {user.username} <small>wants to be your friend</small>
                  </h6>
                  <Button
                    onClick={() => rejecetFriend(idx)}
                    className="req__cross"
                  >
                    ❌
                  </Button>
                  <Button
                    onClick={() => accpetFriend(idx)}
                    className="req__tick"
                  >
                    ✔️
                  </Button>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
