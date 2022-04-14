import React from 'react'
import folder1 from '../assets/folder1.png'
import folder2 from '../assets/folder2.png'
import '../style/folderCard.css'

function FolderCard() {
    return (
        <div className='folderCard'>
            <div className="imgCont">
                <img src={folder2} alt="" />
                <img className='shift' src={folder1} alt="" />
            </div>
            <p>
                Lecture Notes.pdf
            </p>
        </div>
    )
}

export default FolderCard