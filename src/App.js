import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import User from "./Components/User";
function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Navigate to={"user"} />} />
        <Route path="login" />
        <Route path="user/*" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
