import * as React from "react";
import { useParams } from "react-router-dom";
import logo from "../../assets/clubImage.svg";
import Axios from "axios";
import ReactMarkdown from "react-markdown";
//import PostHolderCard from "./PostHolderCard";
import "./CoursePage.scss";
import PostHolderCard from "../Clubs/PostHolderCard";

const CoursePage = (props: any) => {
  const { id } = useParams();
  const [courseData, setCourseData] = React.useState<any>(null);
  React.useEffect(() => {
    try {
      Axios({
        method: "GET",
        url: `/courses/${id}`,
        headers: {
          Authorization:
            "Bearer " +
            `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsInJvbGxubyI6IjEyMDIyMDA1In0.9Btng_hYvKwIjeYS88zAolwiKfuRJE4Q71LMT_lK9jI`,
        },
        withCredentials: true,
      }).then((res: any) => {
        console.log(res.data.data);
        setCourseData(res.data.data);
      });
    } catch (err) {
      alert(err);
    }
  }, []);
  return (
    <>
      {!courseData ? (
        <>Loading...</>
      ) : (
        <div className="clubFullPageContainer">
          <div className="clubName">
            {" "}
            {courseData.code}: {courseData.title}{" "}
          </div>
          <div className="clubImageContainer">
            <img className="clubImage" src={logo} alt="club logo" />
            <div className="clubDescription">
              {/* Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. */}
              <ReactMarkdown>{courseData.content}</ReactMarkdown>
            </div>
            <div className="clubLeaders">
              <h3> Course objectives </h3>
              <div>
                {courseData.objectives.map((book: any) => {
                  return <PostHolderCard name={book} noLogo={true} />;
                })}
              </div>
            </div>
            <div className="clubLeaders">
              <h3> Course outcomes </h3>
              <div>
                {courseData.outcomes.map((book: any) => {
                  return <PostHolderCard name={book} noLogo={true} />;
                })}
              </div>
            </div>
            <div className="clubLeaders">
              <h3> Recommended Books </h3>
              <div className="holdersList">
                {courseData.book_names.map((book: any) => {
                  return <PostHolderCard name={book} />;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoursePage;
