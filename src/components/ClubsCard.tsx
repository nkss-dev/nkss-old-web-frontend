import React from "react";
import "../style/homeCard.scss";
import img from "../assets/techspardha.png";

function ClubsCard() {
  return (
    <div className="homeCardCont clubsCard">
      <div className="imgCont">
        <img src={img} alt="" />
      </div>
      <div className="bottom">
        <h1>Clubs</h1>
        <p>Stay updated with latest college announcement</p>
      </div>
    </div>
  );
}

export default ClubsCard;
