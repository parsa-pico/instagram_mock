import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import getInterestIcon from "../utils/interestsIcons";
import useUser from "./../hooks/useUser";
import interestsLevel from "./../utils/interestsLevel";
import trash from "../Images/Icons/trash.png";
import plus from "../Images/Icons/plus.png";
import floppy from "../Images/Icons/floppy.png";
import { useNavigate } from "react-router-dom";

export default function Interests() {
  const [users, setUsers, currentUser, setCurrentUser] = useUser();

  const [deleteCalled, setDeleteCalled] = useState(false);

  const [floppyClass, setFloppyClass] = useState(
    "img-fluid hidden floppy-icon"
  );

  const navigate = useNavigate();
  useEffect(() => {
    if (deleteCalled) setFloppyClass("img-fluid visible floppy-icon");
  }, [deleteCalled]);

  function deleteInterest(speciality) {
    const userIndex = localStorage.getItem("currentUserIndex");
    const copyUsers = [...users];
    const interestIndex = currentUser.interests.findIndex(
      (interest) => interest.speciality === speciality
    );
    currentUser.interests.splice(interestIndex, 1);
    copyUsers[userIndex] = currentUser;
    setUsers(copyUsers);
    setDeleteCalled(true);
  }

  return (
    <div id="interests">
      <h1 className="interests__heading">interests</h1>
      {
        <div className="floppy-icon-wrapper">
          {deleteCalled && (
            <img className={"img-fluid cross-icon"} src={plus} />
          )}
          <img className={floppyClass} src={floppy} />
        </div>
      }
      <div className="interests-wrapper">
        {Object.keys(currentUser) !== 0 &&
          currentUser.interests &&
          currentUser.interests.length !== 0 &&
          currentUser.interests.map((interest, idx) => {
            return (
              <div
                onClick={() => deleteInterest(interest.speciality)}
                className="interest"
                key={idx}
              >
                <CircularProgressbar value={interestsLevel(interest.level)} />
                <img
                  className="img-fluid interest__icon"
                  src={getInterestIcon(interest.speciality)}
                />
                <img className={"img-fluid interest__trash"} src={trash} />
              </div>
            );
          })}
        <div
          onClick={() => navigate("/user/interest-form")}
          className="interest pointer"
        >
          <CircularProgressbar value={0} />
          <img className="img-fluid interest__icon interest__plus" src={plus} />
        </div>
      </div>
    </div>
  );
}
