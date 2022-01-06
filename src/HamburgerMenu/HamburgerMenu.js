import React, { useState } from 'react';
// import router from '../router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './HamburgerMenu.css'

//import posed, { PoseGroup } from 'react-pose';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
    
    //turn the menu on or off
    const [menuOpen, setMenuOpen] = useState(false)

    const handleOnClick = e => {
        setMenuOpen(!menuOpen)
        // console.log("clicked");
        e.stopPropagation();
    } 

    let visibility = "hide";
 
    if (menuOpen) {
      visibility = "show";
    }
    
    return (
        <div>
                <header className="main-logo">
                <h1 id="name-header" alt="main logo">JACOB GUSS</h1>
                <nav>
                    <ul className="nav-buttons">
                        <li><Link className="link" to="/"><p>HOME</p></Link></li>
                        <li><Link className="link" to="/aboutme"><p>ABOUT ME</p></Link></li>
                        <li><Link className="link" to="/skills"><p>SKILLS</p></Link></li>
                        <li><Link className="link" to="/contact"><p>CONTACT</p></Link></li>
                    </ul>
                </nav>
                {/* <button id="roundButton" onClick={handleOnClick}></button> */}
                <FontAwesomeIcon 
                    id="menu-button"
                    icon={faBars} 
                    size="3x" 
                    color="seashell" 
                    onClick={handleOnClick} 
                />
            </header>
            <div id="flyoutMenu" onClick={handleOnClick} className={visibility}>
                <Link className="link" to="/"><p>HOME</p></Link>
                <Link className="link" to="/aboutme"><p>ABOUT ME</p></Link>
                <Link className="link" to="/skills"><p>SKILLS</p></Link>
                <Link className="link" to="/contact"><p>CONTACT</p></Link>
            </div>
        </div> 
    );
    
}

export default HamburgerMenu