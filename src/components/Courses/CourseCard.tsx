import * as React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./CourseCard.scss";

const CourseCard = () => {
  return (
    <div>
      <div>Course Code: Course Title</div>
      <button>
        View
        <span>
          <BsArrowRight />
        </span>
      </button>
    </div>
  );
};

export default CourseCard;
