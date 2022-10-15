import * as React from "react";
import "./PostHolderCard.scss";
import logo from "../../assets/logo.svg";

const PostHolderCard = (props: any) => {
  return (
    <div className="postHolderCardContainer">
      <div className="postHolderHeader">
        <img className="postHolderImage" src={logo} alt="postHolderName" />
        <div className="postHolderName">{props.name}</div>
      </div>
      <div className="postHolderPhone">{props.phone ? "Phone: " + props.phone : ""}</div>
      <div className="postHolderEmail">Email: {props.email}</div>
    </div>
  );
};

export default PostHolderCard;
