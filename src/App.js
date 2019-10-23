import React, { useState, useRef } from 'react';
import './HamburgerMenu/HamburgerMenu';

import router from './router';
//import posed, { PoseGroup } from 'react-pose';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';


  	const App = () => {

		const [menuOpen, setMenuOpen] = useState(false);

		return (
			<div className="App">
				
				<HamburgerMenu />
				<div className="wrapper">
					{ router }
				</div>	
			</div>
		);
  	}


export default App;
