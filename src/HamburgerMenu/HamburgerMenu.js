import React, { useState } from 'react';
import router from '../router';

//import posed, { PoseGroup } from 'react-pose';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
    
    const [menuOpen, setMenuOpen] = useState(false)
    
    return (
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
        </header>    
    );
    
}

export default HamburgerMenu