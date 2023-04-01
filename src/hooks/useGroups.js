import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import groupsContext from "../Context/groupsContext";

export default function useUser() {
  const [currentGroup, setCurrentGroup] = useState();
  const [groups, setGroups] = useContext(groupsContext);
  const params = useParams();
  useEffect(() => {
    const id = parseInt(params.id);
    const group = groups.find((group) => {
      return group.id === id;
    });
    setCurrentGroup(group);
  }, []);
  return [groups, setGroups, currentGroup, setCurrentGroup];
}
