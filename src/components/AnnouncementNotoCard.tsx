import { BsArrowRight } from "react-icons/bs";
import "../style/announcementNotoCard.scss";

//TODO: Define types for props
function AnnouncementNotoCard(props: any) {
  return (
    <div className="announcementNotoCard">
      <div className="announcement">
        <div className="announcementDate"> [{props.date}]: </div>
        <div className="announcementDesc"> {props.desc}</div>
      </div>
      <button onClick={() => window.open(props.link, "_blank")}>
        View <BsArrowRight />
      </button>
    </div>
  );
}

export default AnnouncementNotoCard;
