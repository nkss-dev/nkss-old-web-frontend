import * as React from "react";
import "./courses.scss";

const Courses = () => {
  const [courses, setCourses] = React.useState([]);
  const [setFilteredCourses, setFilteredCourses] = React.useState([]);

  const getSearch(query: string) {
    let searchedCourses = [] ;
    courses.filter((course) => {
      return course.name.contains(query) || course.code == query ;
    })
  }


  return <div></div>;
};

export default Courses;
