import * as React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./CourseCard.scss";

const CourseCard = (props: any) => {
  return (
    <div className="courseCardContainer">
      <div className="courseName">
        {props.code}: {props.title}
      </div>
      <button className="viewCourseButton">
        View
        <BsArrowRight />
      </button>
    </div>
  );
};

export default CourseCard;
