import React, { useState, useRef } from 'react';
import './HamburgerMenu/HamburgerMenu';
import posed, { PoseGroup } from 'react-pose';
import { Switch, Route, Link } from "react-router-dom";

import Home from './Home'
import Portfolio from './Portfolio/Portfolio';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';

import HamburgerMenu from './HamburgerMenu/HamburgerMenu';


  	const App = () => {

		const [menuOpen, setMenuOpen] = useState(false);


		return (
			<div className="App">
				
				<HamburgerMenu />
				<div className="wrapper">
					<Switch>
						<Route component={ Home }       path="/" key="home" exact  />
						<Route component={ Portfolio }  path="/portfolio" key="portfolio"  />
						<Route component={ Skills }     path="/skills" key="skills" />
						<Route component={ Contact }    path="/contact" key="contact"  />
					</Switch>

				</div>	
			</div>
		);
  	}


export default App;
