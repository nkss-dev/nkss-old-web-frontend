import React from 'react'
import '../style/announcement.css'
import AnnouncementNotoCard from './AnnouncementNotoCard'

function Announcements() {
    return (
        <div className="announcementCont container-fluid">
            <div className="header container">
                <h1>Announcements</h1>
                <p>Stay updated with latest college announcement. Filter unwanted announcements as per your discipline.</p>
            </div>
            <div className="container partition">
            </div>
            <div className="filters container">
                <select name="semester" id="semester">
                    <option value="0">All Semesters</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
                <select name="branch" id="branch">
                    <option value="CS">CS</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                    <option value="EE">EE</option>
                </select>
            </div>
            <div className="notificationCont container">
                <div className="row">
                    <AnnouncementNotoCard className='col-1'/>
                    <AnnouncementNotoCard className='col-1'/>
                    <AnnouncementNotoCard className='col-1'/>
                    <AnnouncementNotoCard className='col-1'/>
                </div>
            </div>
        </div>
    )
}

export default Announcements