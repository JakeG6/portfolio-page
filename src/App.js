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

		</div>	
      </div>
    );
  }
}

export default App;
