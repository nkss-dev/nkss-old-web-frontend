import * as React from "react";
import { Link } from "react-router-dom";
import ClubCard from "./ClubCard";
import Axios from "axios";
import "./clubs.scss";

const Clubs = () => {
  const [clubs, setClubs] = React.useState<any[]>([]);
  React.useEffect(() => {
    try {
      Axios({
        method: "GET",
        url: "/clubs",
        headers: {
          Authorization:
            "Bearer " +
            `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsInJvbGxubyI6IjEyMDIyMDA1In0.9Btng_hYvKwIjeYS88zAolwiKfuRJE4Q71LMT_lK9jI`,
        },
        withCredentials: true,
      }).then((res: any) => {
        setClubs([...res.data["data"]]);
        console.log("res.data: ", res.data);
        console.log(clubs);
      });
    } catch (err) {
      alert(err);
    }
  }, []);
  return (
    <div className="clubsPageMainContainer">
      <h1 className="headingConatiner">Clubs</h1>
      <div className="clubsList">
        {clubs.map((club) => {
          return (
            <Link to={`/clubs/${club.name}`}>
              <ClubCard
                name={club.name}
                description={club.description}
                socials={club.socials}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Clubs;
