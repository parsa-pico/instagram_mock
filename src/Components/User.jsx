import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Feed from "./Feed";
import Setting from "./Setting";
import UserFooter from "./UserFooter";
import UserHeader from "./UserHeader";
import Profile from "./Profile";
import InteresetForm from "./InteresetForm";
export default function User() {
  return (
    <div id="user">
      <UserHeader />
      <Routes>
        <Route path="feed" element={<Feed />} />
        <Route path="setting" element={<Setting />} />
        <Route path="profile" element={<Profile />} />
        <Route path="interest-form" element={<InteresetForm />} />
      </Routes>
      <UserFooter />
    </div>
  );
}
