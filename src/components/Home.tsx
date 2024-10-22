import React from "react";
import "../style/home.scss";
import AnnouncementCard from "./AnnouncementCard";
import rightArrow from "../assets/rightArrow.png";
import CoursesCard from "./CoursesCard";
import ClubsCard from "./ClubsCard";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="homeCont container-fluid">
      <div className="header container">
        <h1>NIT-KKR Student Support System</h1>
        <h2>v1-alpha</h2>
        <p>
          Welcome! The <a href="/about">NKSSS team</a> aims to solve as many issues you face in our college as technologically possible!
          The following 3 options are ones that we're currently actively developing.
          This website is currently under development and you will be notified once its full release rolls around!
          <br></br>
          <br></br>
          PS: NKSSS is <em>not</em> affiliated with NITKKR and is completely student run.
        </p>
      </div>
      <br></br>
      <br></br>
      {/* <div className="SignUpCont">
        <Link to="/about">
          <button className="signUp">
            About Us <img src={rightArrow} alt="" />
          </button>
        </Link>
      </div> */}
      <div className="cardsCont container">
        <div className="row">
          <div onClick={() => navigate("/announcements")} className="col-md-3">
            <AnnouncementCard />
          </div>
          <div onClick={() => navigate("/courses")} className="col-md-3">
            <CoursesCard />
          </div>
          <div onClick={() => navigate("/clubs")} className="col-md-3">
            <ClubsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
