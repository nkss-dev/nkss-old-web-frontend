import * as React from "react";
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./ClubCard.scss";
import logo from "../../assets/logo.svg";

const ClubCard = () => {
  return (
    <div className="cardContainer">
      <div className="namingSection">
        {/** photo and name */}
        <div className="clubLogoContainer">
          <img src={logo} alt="club logo" className="clubLogo" />
        </div>
        <div className="clubNameContainer">
          <div className="alias"> ELAD </div>
          {/* <div className="completeName">English Literary and Debating Club</div> */}
        </div>
      </div>
      <div className="clubDescriptionContainer">
        {/**description */}
        "Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's ."
      </div>
      <div className="socialHandles">
        {/**socials */}
        <div>
          <FaDiscord />
        </div>
        <div>
          <FaFacebook />
        </div>
        <div>
          <FaInstagram />
        </div>
        <div>
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
