import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Announcements from "./components/Announcements";
import Home from "./components/Home";
import Notes from "./components/Notes";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login/Login";
import Clubs from "./components/Clubs/Clubs";
import Courses from "./components/Courses/Courses";
import ClubPage from "./components/Clubs/ClubPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          {" "}
          <Sidebar />{" "}
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/elad" element={<ClubPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
