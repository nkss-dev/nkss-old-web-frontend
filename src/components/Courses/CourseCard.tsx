import * as React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./CourseCard.scss";

const CourseCard = () => {
  return (
    <div className="courseCardContainer">
      <div className="courseName">Course Code: Course Title</div>
      <button className="viewCourseButton">
        View
        <BsArrowRight />
      </button>
    </div>
  );
};

export default CourseCard;
