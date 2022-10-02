import * as React from "react";
import "./PostHolderCard.scss";
import logo from "../../assets/logo.svg";

const PostHolderCard = () => {
  return (
    <div className="postHolderCardContainer">
      <div className="postHolderImageContainer">
        <img className="postHolderImage" src={logo} alt={`postHolderName`} />
        <div className="postHolderName"> Yash Mittal </div>
        <div></div>
      </div>
    </div>
  );
};

export default PostHolderCard;
