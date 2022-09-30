import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Announcements from "./components/Announcements";
import Home from "./components/Home";
import Notes from "./components/Notes";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
