import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { currentUserId } from "../utils/commonFunctions";
import useUser from "./../hooks/useUser";
import { Input } from "./CommonComponents/Inputs";
import { toast, ToastContainer, Zoom } from "react-toastify";

export default function AddContact({ show, setShow }) {
  const [users, setUsers, currentUser, setCurrentUser] = useUser();
  const [error, setError] = useState(null);
  const [contactDetails, setContactDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const handleClose = () => {
    setError(null);
    setContactDetails({
      firstName: "",
      lastName: "",
      phoneNumber: "",
    });
    setShow(false);
  };
  const handleShow = () => setShow(true);

  function handleContactChange(e) {
    const key = e.target.id;
    const value = e.target.value.trim();
    setContactDetails({ ...contactDetails, [key]: value });
  }

  function addContact() {
    const id = findContact();

    if (id === null) return setError("user not found");
    if (isAlreadyFriend(id))
      return setError("this user is already your friend");
    const index = currentUserId();
    const usersCopy = [...users];
    let currentUserCopy = { ...currentUser };
    currentUserCopy.friends = [...currentUserCopy.friends];
    currentUserCopy.friends.push({
      userId: id,
      situation: "accepted",
      givenFirstName: contactDetails.firstName,
      givenLastName: contactDetails.lastName,
    });
    usersCopy[index] = currentUserCopy;
    setUsers(usersCopy);
    setCurrentUser(currentUserCopy);

    toast.success("contact added");
    setError(null);
    setShow(false);
  }

  function findContact() {
    const user = users.find(
      (user) => user.phoneNumber === contactDetails.phoneNumber
    );
    if (user) return user.id;
    else return null;
  }

  function isAlreadyFriend(id) {
    const friend = currentUser.friends.find((friend) => friend.userId === id);
    return friend ? true : false;
  }
  return (
    <>
      <ToastContainer autoClose={2000} transition={Zoom} />
      <Modal backdropClassName="my-backdrop" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            onChange={(e) => handleContactChange(e)}
            className="add-contact__input-wrapper"
          >
            <Input label="first name" id="firstName" />
            <Input label="last name" id="lastName" />
            <Input label="phone number" id="phoneNumber" />
            {error && (
              <div
                className="alert alert-danger add-contact__error"
                role="alert"
              >
                <small>{error}</small>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addContact}>
            Add Contact
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
