import React, { Component } from 'react';
import router from './router';
import { slide as Menu } from 'react-burger-menu'

//import posed, { PoseGroup } from 'react-pose';
import { Link } from 'react-router-dom';

class HamburgerMenu extends Component{ 

    showSettings (event) {
        event.preventDefault();
        
      }
    
    render() {

        return (
            <Menu left>
                <ul className="nav-buttons">
                    <Link className="link" to="/"><p>HOME</p></Link>
                    <Link className="link" to="/portfolio"><p>PORTFOLIO</p></Link>
                    <Link className="link" to="/skills"><p>SKILLS</p></Link>
                    <Link className="link" to="/contact"><p>CONTACT</p></Link>
                </ul>
            </Menu >
            	
        );

    }
     
}

export default HamburgerMenu