import React, { useState, useRef } from 'react';
import './HamburgerMenu/HamburgerMenu';

import { Switch, Route, Link, useLocation } from "react-router-dom";

import Home from './Home'
import AboutMe from './AboutMe/AboutMe';

import Skills from './Skills/Skills';
import Contact from './Contact/Contact';

import HamburgerMenu from './HamburgerMenu/HamburgerMenu';

import { motion, AnimatePresence , MotionConfig, useMotionValue, useTransform } from "framer-motion";



const App = () => {

	const location = useLocation();

	return (
		<div className="App">
			
			<HamburgerMenu />
			<div className="wrapper">
				<AnimatePresence exitBeforeEnter>
					<Switch location={location} key={location.pathname} >
						<Route component={ Home }       path="/"  exact  />
						<Route component={ AboutMe }  	path="/aboutme"   />
						<Route component={ Skills }     path="/skills"  />
						<Route component={ Contact }    path="/contact" />
					</Switch>
				</AnimatePresence>
			</div>	
		</div>
	);
}


export default App;
