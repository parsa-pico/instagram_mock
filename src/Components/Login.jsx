import React, { useEffect, useState } from "react";
import { Input } from "./CommonComponents/Inputs";
import { Link, useNavigate } from "react-router-dom";
import backGround from "../Images/doodles.jpg";
import useUser from "./../hooks/useUser";

export default function Login() {
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
    if (!foundUser) return setGenericError("user not found");
    if (foundUser.password !== userDetails.password)
      return setGenericError("incorrect password");

    localStorage.setItem("currentUserIndex", foundUser.id);
    setGenericError(".");
    navigate("/user/feed");
  };

  function handleUserInfo({ target }) {
    const value = target.value.trim();
    setUserDetails((prevState) => ({
      ...prevState,
      [target.id]: value,
    }));
  }
  return (
    <div id="login-page" className="login-page login-athlete">
      <img
        id="login-page__background"
        className="login-athlete__background"
        src={backGround}
      />
      <form
        className="login-form login-form--withbg  relative"
        onSubmit={handleSubmit}
      >
        <h3 className="login__heading">sign in</h3>
        <div onChange={handleUserInfo}>
          <Input
            className="login-input"
            placeholder="user name"
            id={"username"}
          />
          <Input
            className="login-input mb-2"
            placeholder="password"
            type="password"
            id={"password"}
          />
          <Link to={"/register"} className="login-create-account">
            <small>create account</small>
          </Link>
        </div>

        <div className={errorClass}>
          <b>{genericError}</b>
        </div>

        <div>
          <button className="btn btn-primary login__login-btn">login</button>
        </div>
      </form>
    </div>
  );
}
