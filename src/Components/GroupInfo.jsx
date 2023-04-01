import React, { useEffect, useState } from "react";
import { Button, Image, Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import useGroups from "../hooks/useGroups";
import backArrow from "../Images/Icons/back-arrow.svg";
import useUser from "./../hooks/useUser";
import UserInfoBar from "./UserInfoBar";
import UserInfoMembers from "./UserInfoMembers";

export default function GroupInfo() {
  const [groups, setGroups, currentGroup, setCurrentGroup] = useGroups();
  const [users, setUsers, currentUser] = useUser();
  const [barHeight, setBarHeight] = useState();
  const navigate = useNavigate();
  const [selectedMember, setSelectedMember] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const [selectedMemberName, setSelectedMemberName] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const element = document.getElementsByClassName(
        "group-info-bar-wrapper"
      )[0];
      setBarHeight(element.clientHeight + 20);
    }, 1);
  }, []);

  function getMemberName() {
    const user = users.find((user) => user.id === selectedMember);

    return user.username;
  }

  useEffect(() => {
    if (selectedMember !== null) setSelectedMemberName(getMemberName());
  }, [selectedMember]);

  function removeMember() {
    const groupsCopy = [...groups];
    const currentGroupCopy = { ...currentGroup };

    currentGroupCopy.members = [...currentGroup.members];
    const index = currentGroupCopy.members.findIndex(
      (memberId) => memberId === selectedMember
    );
    currentGroupCopy.members.splice(index, 1);
    groupsCopy[currentGroup.id] = currentGroupCopy;
    setCurrentGroup(currentGroupCopy);
    setGroups(groupsCopy);
  }

  return (
    <div
      onClick={(e) => {
        if (e.target.className === "group-members") setSelectedMember(null);
      }}
      className="group "
      id="group-info"
    >
      <UserInfoBar currentGroup={currentGroup} />

      <div style={{ height: barHeight, flexShrink: 0 }}>.</div>

      <UserInfoMembers
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
        closeModal={handleCloseModal}
        showModal={handleShowModal}
        currentGroup={currentGroup}
      />
      <Modal
        backdropClassName="my-backdrop"
        show={showModal}
        onHide={handleCloseModal}
      >
        <Modal.Body>
          are you sure you want to remove &nbsp;
          <b>{selectedMemberName}</b> ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              removeMember();
              handleCloseModal();
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
