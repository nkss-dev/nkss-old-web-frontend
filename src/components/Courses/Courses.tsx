import * as React from "react";
import { Course } from "../../types/course";
import CourseCard from "./CourseCard";
import "./courses.scss";

const Courses = () => {
  const [courses, setCourses] = React.useState([]);
  const [filteredCourses, setFilteredCourses] = React.useState([]);

  const getSearch = (query: string) => {
    let searchedCourses: Course[] = [];
    courses.filter((course: Course) => {
      return course.title.includes(query) || course.code === query;
    });
  };

  return (
    <div>
      <div>
        <CourseCard />
      </div>
    </div>
  );
};

export default Courses;
