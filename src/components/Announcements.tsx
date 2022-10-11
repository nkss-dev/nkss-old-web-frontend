import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/announcement.scss";
import AnnouncementNotoCard from "./AnnouncementNotoCard";

function Announcements() {
  const iniNoto = [
    {
      name: "",
      link: "",
      tags: "",
    },
  ];
  const [Noto, setNoto] = useState<any[]>(iniNoto);
  const [branch, setBranch] = useState<any>("All Branches");
  const [degree, setDegree] = useState<any>("All Courses");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    try {
      const fetchNoto = async () => {
        const data = await axios.get("http://localhost:8081/announcements");
        console.log("Data: ", data.data);
        setNoto(data.data.data);
        console.log("noto: ", Noto);
      };
      fetchNoto();
      setIsLoading(false);
    } catch (error) {
      console.log("Error: ", error);
    }
  }, []);

  // useEffect(() => {
  //   const fetchNoto = async () => {
  //     let data = await axios.get("http://localhost:8081/announcements");
  //     console.log("data: ", data.data);
  //     if (branch === "All Branches" && degree === "All Courses") {
  //       setNoto(data.data);
  //     } else if (branch === "All Branches" && degree !== "All Courses") {
  //       try {
  //         const arr = data.data.filter(
  //           (e: any) => e.tags != null && e.tags.includes(degree)
  //         );
  //         setNoto(arr);
  //       } catch (error) {
  //         setNoto([]);
  //       }
  //     } else if (branch !== "All Branches" && degree === "All Courses") {
  //       try {
  //         const arr = data.data.filter(
  //           (e: any) => e.tags != null && e.tags.includes(branch)
  //         );
  //         setNoto(arr);
  //       } catch (error) {
  //         setNoto([]);
  //       }
  //     } else if (branch !== "All Branches" && degree !== "All Courses") {
  //       try {
  //         let arr = data.data.filter((e: any) => e.tags != null);
  //         arr = arr.filter((e: any) => e.tags.includes(degree));
  //         arr = arr.filter((e: any) => e.tags.includes(branch));
  //         // console.log(111)
  //         setNoto(arr);
  //       } catch (error) {
  //         console.log(error);
  //         setNoto([]);
  //       }
  //     }
  //   };
  //   fetchNoto();
  //   setIsLoading(false);
  // }, [branch, degree]);

  return (
    <>
      {isLoading ? (
        <> Loading ... </>
      ) : (
        <div className="announcementCont container-fluid">
          <div className="header container">
            <h1>Announcements</h1>
            <p>
              Stay updated with latest college announcement. Filter unwanted
              announcements as per your discipline.
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
              {Noto.length === 0 ? (
                <h3 className="noNoto">No Notifications Available</h3>
              ) : (
                <>
                  {Noto.map((e: any) => {
                    return (
                      <>
                        {e.name === "" ? (
                          ""
                        ) : (
                          <AnnouncementNotoCard
                            desc={e.name}
                            link={`${e.link}`}
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
}

export default Announcements;
