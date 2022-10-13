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
        <p>Huh? What are clubs?? Sorry, never heard</p>
      </div>
    </div>
  );
}

export default ClubsCard;
