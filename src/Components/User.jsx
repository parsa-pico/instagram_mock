import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Feed from "./Feed";
import Setting from "./Setting";
import UserFooter from "./UserFooter";
import UserHeader from "./UserHeader";
export default function User() {
  return (
    <div id="user">
      <UserHeader />
      <Routes>
        <Route path="feed" element={<Feed />} />
        <Route path="setting" element={<Setting />} />
      </Routes>
      <UserFooter />
    </div>
  );
}
