import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaQuora,
  FaWordpress,
} from "react-icons/fa";
import "./ClubCard.scss";
import logo from "../../assets/logo.svg";

const ClubCard = (props: any) => {
  const { name, kind, socials } = props;

  return (
    <div className="cardContainer">
      <Link to={`/clubs/${name}`}>
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
      </Link>
      <div className="clubTypeContainer">
        {/**description */}
        {kind}
      </div>
      <div className="clubSocials">
        {socials.map((social: any) => {
          switch (social.platform) {
            case 'discord':
              return (
                <a className="clubSocial" href={social.link}>
                  <FaDiscord />
                </a>
              );
            case 'email':
              return (
                <a className="clubSocial" href={social.link}>
                  <FaMailBulk />
                </a>
              );
            case 'facebook':
              return (
                <a className="clubSocial" href={social.link}>
                  <FaFacebook />
                </a>
              );
            case 'instagram':
              return (
                <a className="clubSocial" href={social.link}>
                  <FaInstagram />
                </a>
              );
            case 'linkedin':
              return (
                <a className="clubSocial" href={social.link}>
                  <FaLinkedin />
                </a>
              );
            case 'quora':
              return (
                <a className="clubSocial" href={social.link}>
                  <FaQuora />
                </a>
              );
            case 'wordpress':
              return (
                <a className="clubSocial" href={social.link}>
                  <FaWordpress />
                </a>
              );
            default:
              return null
          }
        })}
      </div>
    </div>
  );
};

export default ClubCard;
