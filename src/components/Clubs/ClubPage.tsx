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
  FaQuora,
} from "react-icons/fa";

const ClubPage = (props: any) => {
  const { id } = useParams();
  const [clubData, setClubData] = React.useState<any>(null);
  React.useEffect(() => {
    try {
      Axios({
        method: "GET",
        url: `/clubs/${id}`,
        headers: {
          Authorization:
            "Bearer " +
            `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsInJvbGxubyI6IjEyMDIyMDA1In0.9Btng_hYvKwIjeYS88zAolwiKfuRJE4Q71LMT_lK9jI`,
        },
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
          <div> {id} </div>
          <div className="clubName"> {clubData.name} </div>
          <div className="clubImageContainer">
            <img className="clubImage" src={logo} alt="club logo" />
            <div className="clubDescription">
              {/* Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. */}
              {clubData.description}
            </div>
            <div className="clubLeaders">
              <h3> Our Leaders </h3>
              {clubData.admins ? (
                <div className="holdersList">
                  {clubData.admins.map((admin: any) => {
                    return <PostHolderCard name={admin.name} />;
                  })}
                </div>
              ) : (
                <div className="holdersList">
                  <div className="postHolderCardDiv">
                    <PostHolderCard />
                  </div>
                  <div className="postHolderCardDiv">
                    <PostHolderCard />
                  </div>
                  <div className="postHolderCardDiv">
                    <PostHolderCard />
                  </div>
                  <div className="postHolderCardDiv">
                    <PostHolderCard />
                  </div>
                  <div className="postHolderCardDiv">
                    <PostHolderCard />
                  </div>
                </div>
              )}
              {clubData.faculty ? (
                <div className="holdersList">
                  {clubData.faculty.map((admin: any) => {
                    return <PostHolderCard name={admin.name} />;
                  })}
                </div>
              ) : (
                <div className="holdersList">
                  <div className="postHolderCardDiv">
                    <PostHolderCard />
                  </div>
                  <div className="postHolderCardDiv">
                    <PostHolderCard />
                  </div>
                  <div className="postHolderCardDiv">
                    <PostHolderCard />
                  </div>
                  <div className="postHolderCardDiv">
                    <PostHolderCard />
                  </div>
                  <div className="postHolderCardDiv">
                    <PostHolderCard />
                  </div>
                </div>
              )}
            </div>
            <div className="clubSocials">
              {clubData.socials.discord ? (
                <div
                  onClick={() => {
                    window.location.href = `${clubData.socials.discord}`;
                  }}
                >
                  <FaDiscord />
                </div>
              ) : (
                <></>
              )}
              {clubData.socials.facebook ? (
                <div
                  onClick={() => {
                    window.location.href = `${clubData.socials.facebook}`;
                  }}
                >
                  <FaFacebook />
                </div>
              ) : (
                <></>
              )}
              {clubData.socials.instagram ? (
                <div
                  onClick={() => {
                    window.location.href = `${clubData.socials.instagram}`;
                  }}
                >
                  <FaInstagram />
                </div>
              ) : (
                <></>
              )}
              {clubData.socials.linkedin ? (
                <div
                  onClick={() => {
                    window.location.href = `${clubData.socials.linkedin}`;
                  }}
                >
                  <FaLinkedin />
                </div>
              ) : (
                <></>
              )}
              {clubData.socials.quora ? (
                <div
                  onClick={() => {
                    window.location.href = `${clubData.socials.quora}`;
                  }}
                >
                  <FaQuora />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClubPage;
