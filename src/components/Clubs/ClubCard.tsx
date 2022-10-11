import React, { useEffect, useState } from "react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaQuora,
} from "react-icons/fa";
import "./ClubCard.scss";
import logo from "../../assets/logo.svg";

const ClubCard = (props: any) => {
  const { name, description, socials } = props;

  return (
    <div className="cardContainer">
      <div className="namingSection">
        {/** photo and name */}
        <div className="clubLogoContainer">
          <img src={logo} alt="club logo" className="clubLogo" />
        </div>
        <div className="clubNameContainer">
          <div className="alias"> {name} </div>
          {/* <div className="completeName">English Literary and Debating Club</div> */}
        </div>
      </div>
      <div className="clubDescriptionContainer">
        {/**description */}
        {/* "Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's ." */}
        {description}
      </div>
      <div className="socialHandles">
        {/**socials */}
        {socials.discord ? (
          <div
            onClick={() => {
              window.location.href = `${socials.discord}`;
            }}
          >
            <FaDiscord />
          </div>
        ) : (
          <></>
        )}
        {socials.facebook ? (
          <div
            onClick={() => {
              window.location.href = `${socials.facebook}`;
            }}
          >
            <FaFacebook />
          </div>
        ) : (
          <></>
        )}
        {socials.instagram ? (
          <div
            onClick={() => {
              window.location.href = `${socials.instagram}`;
            }}
          >
            <FaInstagram />
          </div>
        ) : (
          <></>
        )}
        {socials.linkedin ? (
          <div
            onClick={() => {
              window.location.href = `${socials.linkedin}`;
            }}
          >
            <FaLinkedin />
          </div>
        ) : (
          <></>
        )}
        {socials.quora ? (
          <div
            onClick={() => {
              window.location.href = `${socials.quora}`;
            }}
          >
            <FaQuora />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ClubCard;
