import React, { useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useresContext from "../Context/useresContext";
import Interests from "./Interests";
import logoutIcon from "../Images/Icons/logout.png";
import useUser from "./../hooks/useUser";

export default function Setting() {
  const navigate = useNavigate();
  const [users, setUsers, currentUser, setCurrentUser] = useUser();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  function handleLogout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <div id="setting">
      <img
        onClick={() => setShowLogoutModal(true)}
        src={logoutIcon}
        className="img-fluid setting__logout"
      />
      <div className="setting__profile">
        <div>
          <img
            className="img-fluid setting__avatar"
            src={currentUser.avatar}
            alt=""
          />
        </div>
        <h2 className="setting__user-name">{currentUser.username}</h2>
        <Button
          onClick={() => navigate("/user/profile")}
          className="w-100"
          variant="dark"
        >
          Edit Profile
        </Button>
      </div>
      <Interests />

      <Modal
        backdropClassName="my-backdrop"
        placement="top"
        show={showLogoutModal}
        onHide={() => setShowLogoutModal(false)}
      >
        <Modal.Header>
          <Modal.Title className="interest-canvas-title">Logout</Modal.Title>
        </Modal.Header>

        <Modal.Body className="setting__modal__body">
          <p>are you sure you want to logout?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>
            no,keep me logged in
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            yes,log me out!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
