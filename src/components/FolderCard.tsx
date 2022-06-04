import React from 'react'
import * as folder1 from '../assets/folder1.png'
import * as folder2 from '../assets/folder2.png'
import '../style/folderCard.css'

function FolderCard(props: any) {
    return (
        <div onClick={()=> window.open(`https://drive.google.com/file/d/${props.link}`, '_blank')} className='folderCard'>
            <div className="imgCont">
                <img src={folder2} alt="" />
                <img className='shift' src={folder1} alt="" />
            </div>
            <p>
                {props.desc}
            </p>
        </div>
    )
}

export default FolderCard