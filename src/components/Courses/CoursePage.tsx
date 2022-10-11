import * as React from "react";
import logo from "../../assets/clubImage.svg";
//import PostHolderCard from "./PostHolderCard";
import "./CoursePage.scss";

const CoursePage = (props: any) => {
  return (
    <div className="clubFullPageContainer">
      {/* <div> {props.match.params.id} </div> */}
      <div className="clubName"> Technobyte </div>
      <div className="clubImageContainer">
        <img className="clubImage" src={logo} alt="club logo" />
        <div className="clubDescription">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div className="clubLeaders">
          <h3> Our Leaders </h3>
          <div className="holdersList">
            {/* <div className="postHolderCardDiv">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
