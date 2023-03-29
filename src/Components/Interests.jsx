import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
export default function Interests() {
  return (
    <div id="interests">
      <h1 className="interests__heading">interests</h1>

      <div className="interests-wrapper">
        <CircularProgressbar value={50} />
        <CircularProgressbar value={50} />
        <CircularProgressbar value={50} />
        <CircularProgressbar value={50} />
      </div>
    </div>
  );
}
