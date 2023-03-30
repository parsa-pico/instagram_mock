import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import User from "./Components/User";
import useresData from "./DataBase/users.json";
import useresContext from "./Context/useresContext.js";

function App() {
  useEffect(() => {
    localStorage.setItem("currentUserIndex", 1);
  });
  const [users, setUseres] = useState(useresData);
  return (
    <div id="app">
      <useresContext.Provider value={[users, setUseres]}>
        <Routes>
          <Route path="/" element={<Navigate to={"user/feed"} />} />
          <Route path="login" />

          <Route path="user/*" element={<User />} />
        </Routes>
      </useresContext.Provider>
    </div>
  );
}

export default App;
