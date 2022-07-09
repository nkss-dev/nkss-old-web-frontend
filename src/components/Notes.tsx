import React, { useEffect, useState } from "react";
import "../style/notes.scss";
import FolderCard from "./FolderCard";
import axios from "axios";

function Notes() {
  const iniFile = [
    {
      link: "",
      name: "",
      tags: ["course:", "course:"],
    },
  ];

  const [files, setFiles] = useState(iniFile);
  const [branch, setBranch] = useState("CS");
  const [year, setYear] = useState("1");

  useEffect(() => {
    try {
      const fetchData = async () => {
        let data = await axios.get(
          "https://NKSS-drive-production-e005.up.railway.app/files"
        );
        setFiles(
          data.data.filter((e: any) => {
            let check = 0;
            e.tags.forEach((el: any) => {
              if (
                el.substring(7, 9) === branch &&
                el.substring(11, 12) === year
              ) {
                check = 1;
              }
            });
            return check;
          })
        );
      };
      fetchData();
    } catch (error) {
      console.log("Error: ", error);
    }
  }, [branch, year]);

  return (
    <div className="notesCont container-fluid">
      <div className="header container">
        <h1>Notes</h1>
        <p>
          Stay prepared for all exams with up to date notes. Filter notes based
          on their subject code, semester and branch.
        </p>
      </div>
      <div className="partition container"></div>
      <div className="filters container">
        <select
          onChange={(e: any) => setYear(e.target.value)}
          name="Year"
          id="Year"
        >
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
        <select
          onChange={(e: any) => setBranch(e.target.value)}
          name="branch"
          id="branch"
        >
          <option value="CS">CS</option>
          <option value="IT">IT</option>
          <option value="EC">ECE</option>
          <option value="EE">EE</option>
          <option value="ME">ME</option>
          <option value="PI">PIE</option>
          <option value="CE">Civil</option>
        </select>
      </div>
      <div className="folderCont container">
        <div className="row">
          {files.length === 0 ? (
            <h3 className="noNotes">No Notes Found</h3>
          ) : (
            files.map((e: any) => {
              return (
                <FolderCard desc={e.name} link={e.link} className="col-md-4" />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Notes;
