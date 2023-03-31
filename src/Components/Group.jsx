import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GroupBar from "./GroupBar";

export default function Group() {
  const params = useParams();
  const [groupId, setGroupId] = useState();
  useEffect(() => {
    setGroupId(params.id);
  }, []);
  return (
    <div id="group">
      <GroupBar groupId={groupId} />
    </div>
  );
}
