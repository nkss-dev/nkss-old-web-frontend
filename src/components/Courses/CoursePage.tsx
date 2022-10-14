import * as React from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import ReactMarkdown from "react-markdown";
import "./CoursePage.scss";

const CoursePage = (props: any) => {
  const { id } = useParams();
  const [courseData, setCourseData] = React.useState<any>(null);
  React.useEffect(() => {
    try {
      Axios({
        method: "GET",
        url: `/courses/${id}`,
        withCredentials: true,
      }).then((res: any) => {
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
        <div className="courseFullPageContainer">
          <div className="header container">
            <h1>
              {courseData.title}
            </h1>
            <p>
              This page will soon contain a link to notes, past papers and reference books.
            </p>
          </div>

          <div className="courseDetails container">
            <div className="courseBasic">
              <table>
                <tr>
                  <td className="left">
                    <li>
                      <strong>Course Code:</strong> {courseData.code}
                    </li>
                    <li>
                      <strong>Prerequisites:</strong> {courseData.prereq ? courseData.prereq : "None"}
                    </li>
                    <li>
                      <strong>Course Type:</strong> {courseData.kind}
                    </li>
                    <li>
                      <strong>Course Objectives:</strong>
                      <ul>
                        {courseData.objectives.map((objective: string) => {
                          return (
                            <li>{objective}</li>
                          );
                        })}
                      </ul>
                    </li>
                  </td>
                  <td className="right">
                    <table className="creditTable">
                      <caption>Credit Distribution</caption>
                      <tr>
                        <th>Branch</th>
                        <th>Semester</th>
                        <th>Lecture</th>
                        <th>Practical</th>
                        <th>Tutorial</th>
                        <th>Total</th>
                      </tr>
                      {courseData.specifics.map((specific: any) => {
                        return (
                          <tr>
                            <td>{specific.branch}</td>
                            <td>{specific.semester}</td>
                            <td>{specific.credits[0]}</td>
                            <td>{specific.credits[1]}</td>
                            <td>{specific.credits[2]}</td>
                            <td>{specific.credits[3]}</td>
                          </tr>
                        );
                      })}
                    </table>
                  </td>
                </tr>
              </table>
            </div>

          <li>
            <strong>Course Content:</strong>
            <ReactMarkdown className="md">{courseData.content}</ReactMarkdown>
          </li>

          <li>
            <strong>Recommended Books:</strong>
            <ul>
              {courseData.book_names.map((book_name: string) => {
                return (
                  <li>{book_name}</li>
                );
              })}
            </ul>
          </li>

          <li>
            <strong>Course Outcomes:</strong>
            <ul>
              {courseData.outcomes.map((outcome: string) => {
                return (
                  <li>{outcome}</li>
                );
              })}
            </ul>
          </li>
        </div>
        </div>
      )}
    </>
  );
};

export default CoursePage;
