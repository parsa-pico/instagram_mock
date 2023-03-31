import { useContext, useEffect, useState } from "react";
import groupsContext from "../Context/groupsContext";

export default function useUser(id) {
  const [groups, setGroups] = useContext(groupsContext);

  return [groups, setGroups];
}
