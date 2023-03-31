import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GroupBar from "./GroupBar";
import GroupChat from "./GroupChat";
import useGroups from "../hooks/useGroups";
import GroupInput from "./GroupInput";
export default function Group() {
  const [groups, setGroups] = useGroups();
  const params = useParams();
  const [currentGroup, setCurrentGroup] = useState();

  useEffect(() => {
    const id = parseInt(params.id);
    const group = groups.find((group) => {
      return group.id === id;
    });
    setCurrentGroup(group);
    document.getElementById("user-footer").className = "hidden display-none";
    return () => {
      document.getElementById("user-footer").className = "";
    };
  }, []);

  return (
    <div id="group">
      <GroupBar currentGroup={currentGroup} />
      <GroupChat currentGroup={currentGroup} />
      <GroupInput
        setCurrentGroup={setCurrentGroup}
        currentGroup={currentGroup}
      />
    </div>
  );
}
