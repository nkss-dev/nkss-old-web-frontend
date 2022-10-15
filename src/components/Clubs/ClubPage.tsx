import * as React from "react";
import logo from "../../assets/clubImage.svg";
import PostHolderCard from "./PostHolderCard";
import { useParams } from "react-router-dom";
import Axios from "axios";
import "./ClubPage.scss";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaQuora,
  FaWordpress,
} from "react-icons/fa";
import ReactMarkdown from "react-markdown";

const ClubPage = (props: any) => {
  const { id } = useParams();
  const [clubData, setClubData] = React.useState<any>(null);
  React.useEffect(() => {
    try {
      Axios({
        method: "GET",
        url: `/clubs/${id}`,
        withCredentials: true,
      }).then((res: any) => {
        console.log("res.data: ", res.data.data);
        setClubData(res.data.data);
      });
    } catch (err) {
      alert(err);
    }
  }, []);

  return (
    <>
      {!clubData ? (
        <> Loading...</>
      ) : (
        <div className="clubFullPageContainer">
          <div className="headingContainer container">
            <h1> {clubData.name} </h1>
          </div>

          <div className="clubDescription container">
            <ReactMarkdown>{clubData.description}</ReactMarkdown>
          </div>

          <div className="clubAdmins container">
            <h3>Post Holders</h3>
            <div className="holdersList">
              {clubData.admins.map((admin: any) => {
                return <PostHolderCard name={admin.name} phone={admin.phone} email={admin.email} />;
              })}
            </div>
          </div>

          <div className="clubFaulties container">
            <h3>Faculties In-Charge</h3>
            <div className="holdersList">
              {clubData.faculties.map((faculty: any) => {
                return <PostHolderCard name={faculty.name} />;
              })}
            </div>
          </div>

          <div className="clubSocials">
            {clubData.socials.map((social: any) => {
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
      )}
    </>
  );
};

export default ClubPage;
