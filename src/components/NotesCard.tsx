import React from 'react'
import '../style/homeCard.css'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import Group from '../assets/Group.png'
import vector from '../assets/Vector.png'



function NotesCard() {
    return (
        <div className="homeCardCont notesCard">
            <div className="imgCont">
                <img className='group' src={Group} alt="" />
                <img className='vector2' src={vector} alt="" />
                <img className='vector3' src={vector} alt="" />
                <img className='vector4' src={vector} alt="" />
                <img className='img2' src={img2} alt="" />
                <img className='img3' src={img3} alt="" />
                <img className='img4' src={img4} alt="" />
            </div>
            <div className="bottom">
                <h1>
                    Notes
                </h1>
                <p>
                    Stay prepared for all exams with up to date notes.
                </p>
            </div>
        </div>
    )
}

export default NotesCard