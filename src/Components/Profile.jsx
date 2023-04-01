import React, { useContext, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useresContext from "../Context/useresContext";
import DatePicker from "react-datepicker";
export default function Profile() {
  const [currentUser, setCurrentUser] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [users, setUsers] = useContext(useresContext);
  const navigate = useNavigate();
  useEffect(() => {
    const index = localStorage.getItem("currentUserIndex");
    const userCopy = { ...users[index] };
    setSelectedDate(new Date(userCopy.birthDate || Date.now()));
    setCurrentUser(userCopy);
  }, []);

  function handleSubmit(e) {
    if (e) e.preventDefault();
    convertDate(selectedDate);

    const index = localStorage.getItem("currentUserIndex");
    const useresCopy = [...users];
    const currentUserCopy = { ...currentUser };
    currentUserCopy.birthDate = convertDate(selectedDate);
    useresCopy[index] = currentUserCopy;
    setUsers(useresCopy);
    navigate("/user/setting");
  }

  function convertDate(inputDate) {
    let day = inputDate.getUTCDate().toString();

    day = day[1] ? day : "0" + day;
    let month = (inputDate.getUTCMonth() + 1).toString();
    month = month[1] ? month : "0" + month;
    let year = inputDate.getUTCFullYear().toString();
    const converted = `${year}-${month}-${day}`;
    return converted;
  }

  return (
    <div id="profile">
      <form onSubmit={(e) => handleSubmit(e)} className="profile__form">
        <div className="form-group">
          <label htmlFor="username">
            <small>user name:</small>
          </label>
          <input
            onChange={({ target }) =>
              setCurrentUser({ ...currentUser, username: target.value })
            }
            className="form-control profile__input"
            id="username"
            placeholder="Enter desired name"
            value={currentUser.username || ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">
            <small>country:</small>
          </label>
          <input
            onChange={({ target }) =>
              setCurrentUser({ ...currentUser, country: target.value })
            }
            className="form-control profile__input"
            id="counter"
            placeholder="Enter your Country"
            value={currentUser.country || ""}
          />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label className="datepicker-label" htmlFor="my-datepicker">
            <small>birth date:</small>
          </label>
          <div>
            <DatePicker
              id="my-datepicker"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="profile__datepicker"
            />
          </div>
        </div>

        <Button onClick={handleSubmit} className="mt-2">
          save
        </Button>
      </form>
    </div>
  );
}
