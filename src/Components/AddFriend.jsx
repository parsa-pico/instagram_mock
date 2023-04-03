import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { ToastContainer, toast, Zoom } from "react-toastify";
import useUser from "../hooks/useUser";
import searchIcon from "../Images/Icons/search.svg";
import addPersonIcon from "../Images/Icons/addPerson.svg";
import { currentUserId } from "../utils/commonFunctions";
import AddContact from "./AddContact";
export default function AddFriend() {
  const [users, setUsers, currentUser, setCurrentUser] = useUser();
  const [foundUsers, setFoundUsers] = useState([]);
  const [showAddContact, setShowAddContact] = useState(false);
  function search(value) {
    if (value === "") return setFoundUsers([]);
    const filterd = users.filter((user) =>
      user.username.toLowerCase().includes(value)
    );

    setFoundUsers(filterd);
  }
  function sendRequest(id) {
    const index = currentUserId();
    const usersCopy = [...users];
    let currentUserCopy = { ...currentUser };
    currentUserCopy.friends = [...currentUserCopy.friends];
    currentUserCopy.friends.push({ userId: id, situation: "accepted" });
    usersCopy[index] = currentUserCopy;
    setUsers(usersCopy);
    setCurrentUser(currentUserCopy);
    toast.success("request sent");
  }
  return (
    <div id="add-friend">
      <ToastContainer autoClose={2000} transition={Zoom} />
      <h4 className="search-heading">Add Friend</h4>
      <div className="form-group">
        <div className="search-wrapper">
          <input
            onChange={({ target }) => search(target.value)}
            className="form-control search-input "
            id="username"
            placeholder="search"
          />

          <img className="img-fluid search-btn" src={searchIcon} alt="" />
        </div>
      </div>
      <div className="found-users-wrapper">
        {foundUsers.length !== 0 &&
          foundUsers.map((user, idx) => {
            const isYou = currentUser.id === user.id;
            const isFriend = currentUser.friends.find(
              (friend) =>
                (friend.userId === user.id && friend.situation !== "pending") ||
                isYou
            );
            return (
              <div key={idx} className="add-friend-user">
                <div className="flex-row">
                  <Image className="post__avatar" fluid src={user.avatar} />
                  <h6 className="req__heading">
                    {user.username}
                    &nbsp; &nbsp;
                    {isYou && (
                      <small style={{ fontSize: "0.8rem", color: "grey" }}>
                        you
                      </small>
                    )}
                  </h6>
                </div>

                {!isFriend && (
                  <Button
                    onClick={() => sendRequest(user.id)}
                    className="send-req-btn"
                  >
                    send request
                  </Button>
                )}
              </div>
            );
          })}
      </div>
      <div
        onClick={() => setShowAddContact(true)}
        className="add-friend__add-contact"
      >
        <img
          className="img-fluid add-friend__add-contact__img "
          src={addPersonIcon}
        />
      </div>
      <AddContact show={showAddContact} setShow={setShowAddContact} />
    </div>
  );
}
