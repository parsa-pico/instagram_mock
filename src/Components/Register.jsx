import React, { useEffect, useState } from "react";
import { Input } from "./CommonComponents/Inputs";
import { Link, useNavigate } from "react-router-dom";
import backGround from "../Images/doodles.jpg";
import useUser from "./../hooks/useUser";
import backArrow from "../Images/Icons/back-arrow.svg";

const uploadFolder = "/UploadStuff/";

export default function Register() {
  const navigate = useNavigate();
  const [users, setUsers] = useUser();
  const [userDetails, setUserDetails] = useState({});
  const [genericError, setGenericError] = useState(".");
  const [errorClass, setErrorClass] = useState(
    "alert alert-danger login__error hidden"
  );

  useEffect(() => {
    if (genericError === "" || genericError === ".")
      setErrorClass("alert alert-danger login__error hidden");
    else setErrorClass("alert alert-danger login__error visible");
  }, [genericError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = users.find(
      (user) => user.username === userDetails.username
    );
    if (foundUser) return setGenericError("user name exists");
    const usersCopy = [...users];
    const id = users.length;
    usersCopy.push({ ...userDetails, id, interests: [], friends: [] });
    setUsers(usersCopy);

    localStorage.setItem("currentUserIndex", id);
    setGenericError(".");
    navigate("/user/feed");
  };

  function handleUserInfo({ target }) {
    if (target.type !== "file") {
      const value = target.value.trim();
      setUserDetails((prevState) => ({
        ...prevState,
        [target.id]: value,
      }));
    }
  }
  return (
    <div className="login-page login-athlete">
      <img className="login-athlete__background" src={backGround} />
      <form
        className="login-form login-form--withbg  relative"
        onSubmit={handleSubmit}
      >
        <img
          className="img-fluid register__back-arrow"
          src={backArrow}
          onClick={() => navigate("/login")}
        />
        <h3 className="login__heading">create account</h3>
        <div onChange={handleUserInfo}>
          <Input
            className="login-input"
            placeholder="user name"
            id={"username"}
          />
          <label style={{ width: "100%", textAlign: "left" }} htmlFor="avatar">
            avatar
          </label>
          <input
            onChange={(e) => {
              const name = e.target.files[0].name;
              setUserDetails({ ...userDetails, avatar: uploadFolder + name });
            }}
            accept="image/*"
            className="form-control"
            type="file"
            id="avatar"
          />
          <Input className="login-input" placeholder="country" id="country" />
          <Input
            className="login-input mb-2"
            placeholder="password"
            type="password"
            id={"password"}
          />
        </div>

        <div className={errorClass}>
          <b>{genericError}</b>
        </div>

        <div>
          <button className="btn btn-primary login__login-btn">register</button>
        </div>
      </form>
    </div>
  );
}
