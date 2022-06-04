import {BsArrowRight} from 'react-icons/bs'
import '../style/announcementNotoCard.css'


//TODO: Define types for props
function AnnouncementNotoCard(props: any) {

  return (
    <div className="announcementNotoCard">
        <p>
        {props.desc}
        </p>
        <button onClick={()=>window.open(props.link, '_blank')}>
            View <BsArrowRight/>
        </button>
    </div>
  )
}

export default AnnouncementNotoCard