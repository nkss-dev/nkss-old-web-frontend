import React from "react";
import "../style/home.scss";
import AnnouncementCard from "./AnnouncementCard";
import rightArrow from "../assets/rightArrow.png";
import underline from "../assets/underline.png";
import NotesCard from "./NotesCard";
import ClubsCard from "./ClubsCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="homeCont container-fluid">
      <div className="header container">
        <h1>NOTEFY</h1>
        <p>
          The senior you always wanted. Stay updated with latest and relevant
          announcements with one-click away. Want best notes for exam
          preparation
          <br />{" "}
          <span>
            {" "}
            <img src={underline} alt="" />
            -Done!
          </span>
        </p>
      </div>
      <div className="SignUpCont">
        <button className="signUp">
          Sign Up <img src={rightArrow} alt="" />
        </button>
      </div>
      <div className="cardsCont container">
        <div className="row">
          <div onClick={() => navigate("/announcements")} className="col-md-3">
            <AnnouncementCard />
          </div>
          <div onClick={() => navigate("/notes")} className="col-md-3">
            <NotesCard />
          </div>
          <div className="col-md-3">
            <ClubsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
