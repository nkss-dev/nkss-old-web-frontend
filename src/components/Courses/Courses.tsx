import * as React from "react";
import { Course } from "../../types/course";
import CourseCard from "./CourseCard";
import Axios from "axios";
import "./courses.scss";
import CourseSearchBar from "./CourseSearchBar";

const Courses = () => {
  const [courses, setCourses] = React.useState<any[]>([]);
  const [filteredCourses, setFilteredCourses] = React.useState([]);

  const getSearch = (query: string) => {
    let searchedCourses: Course[] = [];
    courses.filter((course: Course) => {
      return course.title.includes(query) || course.code === query;
    });
  };

  //TODO: implement the funcitonality to filter courses using the getSearch func

  React.useEffect(() => {
    try {
      Axios({
        method: "GET",
        url: "/courses",
        withCredentials: true,
      }).then((res: any) => {
        setCourses([...res.data.data]);
      });
    } catch (err) {
      alert(err);
    }
  }, []);

  return (
    <div>
      <div className="headingConatiner"> Courses </div>
      <div>
        <CourseSearchBar />
      </div>
      <div>
        {courses.map((course: any) => {
          return <CourseCard code={course.code} title={course.title} />;
        })}
      </div>
    </div>
  );
};

export default Courses;
