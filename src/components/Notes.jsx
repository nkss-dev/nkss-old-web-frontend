import React from 'react'
import '../style/notes.css'
import FolderCard from './FolderCard'

function Notes() {
    return (
        <div className="notesCont container-fluid">
            <div className="header container">
                <h1>Notes</h1>
                <p>Stay prepared for all exams with up to date notes. Filter notes based on their subject code, semester and branch.</p>
            </div>
            <div className="partition container"></div>
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
                <select name="subjectCode" id="subjectCode">
                    <option value="ITPC20">ITPC20</option>
                    <option value="ITPC21">ITPC21</option>
                    <option value="ITPC22">ITPC22</option>
                    <option value="ITPC23">ITPC23</option>
                </select>
            </div>
            <div className="folderCont container">
                <div className="row">
                    <FolderCard className='col-md-4' />
                    <FolderCard className='col-md-4' />
                    <FolderCard className='col-md-4' />
                    <FolderCard className='col-md-4' />
                    <FolderCard className='col-md-4' />
                    <FolderCard className='col-md-4' />
                    <FolderCard className='col-md-4' />
                    <FolderCard className='col-md-4' />
                    <FolderCard className='col-md-4' />
                </div>
            </div>
        </div>
    )
}

export default Notes