import React, { Component } from 'react';
import router from './router';
//import posed, { PoseGroup } from 'react-pose';
import { Link } from 'react-router-dom';

class App extends Component {
  	render = () => {
		return (
			<div className="App">
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
				<div className="wrapper">
					{ router }
				</div>	
			</div>
		);
  	}
}

export default App;
