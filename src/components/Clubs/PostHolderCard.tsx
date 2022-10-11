import * as React from "react";
import "./PostHolderCard.scss";
import logo from "../../assets/logo.svg";

const PostHolderCard = (props: any) => {
  return (
    <div className="postHolderCardContainer">
      <div className="postHolderImageContainer">
        {props.noLogo === true ? (
          <></>
        ) : (
          <img className="postHolderImage" src={logo} alt={`postHolderName`} />
        )}
        <div className="postHolderName">
          {" "}
          {props.name ? props.name : "John Doe"}{" "}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default PostHolderCard;
