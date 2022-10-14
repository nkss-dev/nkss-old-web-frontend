import * as React from "react";
import { Course } from "../../types/course";
import CourseCard from "./CourseCard";
import Axios from "axios";
import "./courses.scss";
import CourseSearchBar from "./CourseSearchBar";
import AnnouncementNotoCard from "../AnnouncementNotoCard";

const Courses = () => {
  const [courses, setCourses] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [filteredCourses, setFilteredCourses] = React.useState([]);
  const [branch, setBranch] = React.useState<any>("All Branches");
  const [degree, setDegree] = React.useState<any>("All Degree");

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
        setIsLoading(false);
      });
    } catch (err) {
      alert(err);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <> Loading ... </>
      ) : (
        <div className="announcementCont container-fluid">
          <div className="header container">
            <h1>Courses</h1>
            <p>
              This page will soon (with the v1 release) display as many
              of the 400+ courses that our college offers for their B. Tech. degree.
              <br></br><br></br>
              The filters will also be fixed before the v1 release.
            </p>
          </div>
          <div className="container partition"></div>
          <div className="filters container">
            <select
              onChange={(e) => setBranch(e.target.value)}
              name="branch"
              id="branch"
              defaultValue={"All Branches"}
            >
              <option value="All Branches">All Branches</option>
              <option value="CS">CS</option>
              <option value="IT">IT</option>
              <option value="EC">ECE</option>
              <option value="EE">EE</option>
              <option value="ME">ME</option>
              <option value="PI">PIE</option>
              <option value="CE">Civil</option>
            </select>
            <select
              onChange={(e) => setDegree(e.target.value)}
              name="degree"
              id="degree"
              defaultValue={"All Courses"}
            >
              <option value="All Courses">All Courses</option>
              <option value="B.Tech.">B.Tech</option>
              <option value="M.Tech.">M.Tech</option>
              <option value="MCA">MCA</option>
            </select>
          </div>
          <div className="notificationCont container">
            <div className="row">
              {courses.length === 0 ? (
                // <h3 className="noNoto"> No notifications available </h3>
                <h3 className="noNoto">Loading ...</h3>
              ) : (
                <>
                  {courses.map((e: any) => {
                    return (
                      <>
                        {e.title === "" ? (
                          ""
                        ) : courses.length === 0 ? (
                          <> Loading </>
                        ) : (
                          <AnnouncementNotoCard
                            date={e.code}
                            desc={e.title}
                            link={`https://nksss.live/courses/${e.code}`}
                            className="col-1"
                          />
                        )}
                      </>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;
