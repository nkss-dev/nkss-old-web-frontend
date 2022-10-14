import * as React from "react";
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
      <div className="headingConatiner container">
        <h1>Clubs</h1>
        <p>This list currently only contains clubs affiliated with the college directly.</p>
      </div>

      <div className="clubsList container">
        {clubs.map((club) => {
          return (
            <ClubCard
              name={club.name}
              kind={club.kind}
              socials={club.socials}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Clubs;
