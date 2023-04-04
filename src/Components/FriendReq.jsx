import React, { useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import useUser from "../hooks/useUser";
import { currentUserId, getUser } from "../utils/commonFunctions";
import { ToastContainer, toast, Zoom } from "react-toastify";
export default function FriendReq() {
  const [users, setUsers, currentUser, setCurrentUser] = useUser();

  function accpetFriend(req, reqIndex) {
    const index = currentUserId();
    const usersCopy = [...users];
    let currentUserCopy = { ...currentUser };
    currentUserCopy.friends = [...currentUserCopy.friends];
    currentUserCopy.friends[reqIndex].situation = "accepted";
    usersCopy[index] = currentUserCopy;
    const friendId = req.userId;
    const friendCopy = { ...getUser(friendId, users) };
    friendCopy.friends = [...friendCopy.friends];
    friendCopy.friends.push({ userId: currentUser.id, situation: "accepted" });
    usersCopy[friendCopy.id] = friendCopy;
    setUsers(usersCopy);
    setCurrentUser(currentUserCopy);
    toast.success("request accepted");
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
      <ToastContainer autoClose={1500} transition={Zoom} />
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
                  <div className="flex-row">
                    <Image className="post__avatar" fluid src={user.avatar} />
                    <h6 className="req__heading">
                      {user.username} <small>wants to be your friend</small>
                    </h6>
                  </div>
                  <div className="flex-row">
                    <Button
                      onClick={() => rejecetFriend(idx)}
                      className="req__cross"
                    >
                      ❌
                    </Button>
                    <Button
                      onClick={() => accpetFriend(req, idx)}
                      className="req__tick"
                    >
                      ✔️
                    </Button>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
