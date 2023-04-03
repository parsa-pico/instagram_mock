import React, { useEffect, useState } from "react";
import { Button, Image, Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import useGroups from "../hooks/useGroups";
import backArrow from "../Images/Icons/back-arrow.svg";
import useUser from "./../hooks/useUser";
import AddMember from "./AddMember";
import RemoveMemberModal from "./RemoveMemberModal";
import GroupInfoBar from "./GroupInfoBar";
import GroupInfoMembers from "./GroupInfoMembers";

export default function GroupInfo() {
  const [groups, setGroups, currentGroup, setCurrentGroup] = useGroups();
  const [users, setUsers, currentUser] = useUser();
  const [barHeight, setBarHeight] = useState();
  const navigate = useNavigate();
  const [selectedMember, setSelectedMember] = useState(null);

  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const handleCloseRemoveModal = () => setShowRemoveModal(false);
  const handleShowModal = () => setShowRemoveModal(true);
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
      <GroupInfoBar currentGroup={currentGroup} />

      <GroupInfoMembers
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
        closeModal={handleCloseRemoveModal}
        showModal={handleShowModal}
        currentGroup={currentGroup}
      />

      <RemoveMemberModal
        showModal={showRemoveModal}
        handleCloseModal={handleCloseRemoveModal}
        selectedMemberName={selectedMemberName}
        removeMember={removeMember}
      />
    </div>
  );
}
