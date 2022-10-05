import * as React from "react";
import { Course } from "../../types/course";
import CourseCard from "./CourseCard";
import "./courses.scss";
import CourseSearchBar from "./CourseSearchBar";

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
      <div className="headingConatiner"> Courses </div>
      <div>
        <CourseSearchBar />
      </div>
      <div>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default Courses;
