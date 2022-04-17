import { React, useEffect, useState } from 'react'
import '../style/sidebar.css'
import { AiOutlineClose, AiFillHome } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdCategory } from 'react-icons/md'
import { BiSupport, BiLogOut } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

export default function Sidebar() {

    const [Expanded, setExpanded] = useState(false);

    const handleIconClick = () => {
        if(!Expanded){
            setExpanded(!Expanded);
        }
    }

    const navigate = useNavigate();

    return (
        <div className={`sidebar ${Expanded ? "" : "inactive"}`}>
            <div className="header">
                <h1 onClick={()=> navigate('/')} className="brand">
                    NOTEFY
                </h1>
                <button onClick={() => setExpanded(!Expanded)}>
                    <AiOutlineClose />
                </button>
            </div>
            <div className="hamburger" onClick={() => setExpanded(!Expanded)}>
                <GiHamburgerMenu />
            </div>
            <div className="divider">

            </div>
            <div className="menuItemsContainer">
                <div className="menuItem">
                    <button onClick={() => handleIconClick()}><AiFillHome /></button>
                    <Link to='/announcements'>
                        Announcements
                    </Link>
                </div>
                <div className='menuItem'>
                    <button onClick={() => handleIconClick()}><MdCategory /></button>
                    <Link to={'/notes'}>
                        Notes
                    </Link>
                </div>
                <div className="menuItem">
                    <button onClick={() => handleIconClick()}><BiSupport /></button>
                    <Link to={'/clubs'}>
                        Clubs
                    </Link>
                </div>
            </div>
            <div className="footer">
                <div className="userinfo">
                    <button><FaUserCircle /></button>
                    <span>Utsav Soni</span>
                </div>
                <div className="logout">
                    <button>
                        <BiLogOut />
                    </button>
                    <span>
                        Logout
                    </span>
                </div>
            </div>
        </div>
    )
}
