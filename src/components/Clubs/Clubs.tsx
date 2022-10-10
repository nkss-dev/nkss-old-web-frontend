import * as React from "react";
import { Link } from "react-router-dom";
import ClubCard from "./ClubCard";
import Axios from 'axios';
import "./clubs.scss";

const Clubs = () => {
  const [clubs, setClubs] = React.useState<any[]>([]);
  React.useEffect(() => {
    try{
      Axios({
          method: "GET",
          url: "/clubs",
          headers: {
            'Authorization': 'Bearer ' + `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsInJvbGxubyI6IjEyMDIyMDA1In0.9Btng_hYvKwIjeYS88zAolwiKfuRJE4Q71LMT_lK9jI`
          },
          withCredentials: true
      }).then((res: any) => {
          setClubs([...res.data["data"]]);
          console.log(clubs);
      })
  } catch(err) {
      alert(err);
  }
  }, [])
  return (
    <div className="clubsPageMainContainer">
      <h1 className="headingConatiner">Clubs</h1>
      <div className="clubsList">
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
        <Link to="/elad">
          <div>
            <ClubCard />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Clubs;
