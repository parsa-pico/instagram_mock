import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Feed from "./Feed";
import Setting from "./Setting";
import UserFooter from "./UserFooter";
import UserHeader from "./UserHeader";
import Profile from "./Profile";
import InteresetForm from "./InteresetForm";
import Contact from "./Contact";
import AddFriend from "./AddFriend";
import Groups from "./Groups";
export default function User() {
  return (
    <div id="user">
      <UserHeader />
      <Routes>
        <Route path="feed" element={<Feed />} />
        <Route path="setting" element={<Setting />} />
        <Route path="profile" element={<Profile />} />
        <Route path="interest-form" element={<InteresetForm />} />
        <Route path="contact" element={<Contact />} />
        <Route path="add-friend" element={<AddFriend />} />
        <Route path="groups" element={<Groups />} />
      </Routes>
      <UserFooter />
    </div>
  );
}
