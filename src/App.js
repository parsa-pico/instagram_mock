import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import User from "./Components/User";
import useresData from "./DataBase/users.json";
import groupsData from "./DataBase/groups.json";
import chatsData from "./DataBase/chats.json";
import useresContext from "./Context/useresContext.js";
import groupsContext from "./Context/groupsContext";
import chatsContext from "./Context/chatsContext";

function App() {
  useEffect(() => {
    localStorage.setItem("currentUserIndex", 1);
  });
  const [users, setUseres] = useState(useresData);
  const [groups, setGroups] = useState(groupsData);
  const [chats, setChats] = useState(chatsData);
  return (
    <div id="app">
      <groupsContext.Provider value={[groups, setGroups]}>
        <useresContext.Provider value={[users, setUseres]}>
          <Routes>
            <Route path="/" element={<Navigate to={"user/feed"} />} />
            <Route path="login" />

            <Route path="user/*" element={<User />} />
          </Routes>
        </useresContext.Provider>
      </groupsContext.Provider>
    </div>
  );
}

export default App;
