import React, { useState } from 'react';
import router from '../router';

import './HamburgerMenu.css'

//import posed, { PoseGroup } from 'react-pose';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
    
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMouseDown = e => {
        setMenuOpen(!menuOpen)
        console.log("clicked");
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
                        <li><Link className="link" to="/portfolio"><p>PORTFOLIO</p></Link></li>
                        <li><Link className="link" to="/skills"><p>SKILLS</p></Link></li>
                        <li><Link className="link" to="/contact"><p>CONTACT</p></Link></li>
                    </ul>
                </nav>
                <button id="roundButton" onMouseDown={handleMouseDown}></button>
                {/* <nav>
                    <ul className="nav-buttons">
                        <li><Link className="link" to="/"><p>HOME</p></Link></li>
                        <li><Link className="link" to="/portfolio"><p>PORTFOLIO</p></Link></li>
                        <li><Link className="link" to="/skills"><p>SKILLS</p></Link></li>
                        <li><Link className="link" to="/contact"><p>CONTACT</p></Link></li>
                    </ul>
                </nav> */}
            </header>
            <div id="flyoutMenu" onMouseDown={handleMouseDown} className={visibility}>
                <li><Link className="link" to="/"><p>HOME</p></Link></li>
                <li><Link className="link" to="/portfolio"><p>PORTFOLIO</p></Link></li>
                <li><Link className="link" to="/skills"><p>SKILLS</p></Link></li>
                <li><Link className="link" to="/contact"><p>CONTACT</p></Link></li>
            </div>
        </div> 
    );
    
}

export default HamburgerMenu