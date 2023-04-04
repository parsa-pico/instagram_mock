import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import User from "./Components/User";
import useresData from "./DataBase/users.json";
import groupsData from "./DataBase/groups.json";
import chatsData from "./DataBase/chats.json";
import postsData from "./DataBase/posts.json";
import useresContext from "./Context/useresContext.js";
import groupsContext from "./Context/groupsContext";
import chatsContext from "./Context/chatsContext";
import PostsContext from "./Context/postsContext";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  const [users, setUseres] = useState(useresData);
  const [groups, setGroups] = useState(groupsData);
  const [chats, setChats] = useState(chatsData);
  const [posts, setPosts] = useState(postsData);

  return (
    <div id="app">
      <groupsContext.Provider value={[groups, setGroups]}>
        <PostsContext.Provider value={[posts, setPosts]}>
          <useresContext.Provider value={[users, setUseres]}>
            <chatsContext.Provider value={[chats, setChats]}>
              <Routes>
                <Route path="/" element={<Navigate to="login" />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />

                <Route path="user/*" element={<User />} />
              </Routes>
            </chatsContext.Provider>
          </useresContext.Provider>
        </PostsContext.Provider>
      </groupsContext.Provider>
    </div>
  );
}

export default App;
