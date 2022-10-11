import * as React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./CourseCard.scss";

const CourseCard = (props: any) => {
  return (
    <div className="courseCardContainer">
      <div className="courseName">
        {props.code}: {props.title}
      </div>
      <Link to={`/courses/${props.code}`}>
        <button className="viewCourseButton">
          View
          <BsArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default CourseCard;
