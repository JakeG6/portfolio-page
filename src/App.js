import React, { Component } from 'react';

import router from './router';
import { Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      	<div className="App">
		  	<header className="main-logo">
				<img id="name-png-header" src="Images/main-logo.png" alt="main logo"/>
				<nav>
					<ul className="nav-buttons">
						<li><Link className="link" to="/"><p>HOME</p></Link></li>
						<li><Link className="link" to="/portfolio"><p>PORTFOLIO</p></Link></li>
						<li><Link className="link" to="/skills"><p>SKILLS</p></Link></li>
						<li><Link className="link" to="/contact"><p>CONTACT</p></Link></li>
					</ul>
				</nav>	
			</header>
       	<div className="wrapper">
			
			{ router }
			
			{/* <footer>
				<nav className="footer-nav">
					<p className="footer-name">&copy; Jake Guss</p>
					<a className="to-top" href="#name-png-header">BACK TO TOP</a>
					<a className="footer-item" href="#name-png-header">HOME</a>
					<a className="footer-item" href="#portfolio-png">PORTFOLIO</a>
					<a className ="footer-item" href="#skills-png">SKILLS</a>
					<a className ="footer-item" href="#contact-png">CONTACT</a>
				</nav>
			</footer> */}
		</div>	
      </div>
    );
  }
}

export default App;
