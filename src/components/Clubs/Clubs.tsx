import * as React from "react";
import { Link } from "react-router-dom";
import ClubCard from "./ClubCard";
import "./clubs.scss";

const Clubs = () => {
  return (
    <div className="clubsPageMainContainer">
      <h1 className="headingConatiner">Clubs</h1>
      <div className="clubsList">
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Clubs;
