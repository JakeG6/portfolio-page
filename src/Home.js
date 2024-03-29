import React, { Component } from 'react';
import Portfolio from './Portfolio/Portfolio';

import { motion, AnimatePresence, MotionConfig, useMotionValue, useTransform } from "framer-motion";
import "./home.css";

class Home extends Component {

  render() {

    const styles = {
      a: {
          textDecoration: "none"
      },
      codeLink: {
          
          textAlign: "center",
          textDecoration: "none"
      },
      
  }

    return (

      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>

        <div >
          <h2 className="page-logo" alt="portfolio logo">WELCOME</h2>
        </div>
        <section className="profile">
          <div className="profile-top">
          </div>
          <img className="profile-picture" src="Images/rainforest1.jpg" alt="A forest"/>
          <p className="about-me">Hi, I'm a full-stack developer with over four years of experience who loves javascript-based web technologies and developing intricate programmatic systems. 
            On this site you'll find my various projects and contact links. I'm excited to continue learning and putting all my skills to use.
            <a href="https://www.dropbox.com/s/ykxz54qpab74s4i/JGuss_WebDev_Resume_V3.pdf?dl=0" target="_blank" className="resume-button"> You can find my resume here!</a>
          </p>
        </section>
        < Portfolio />
        
        </motion.div>

    );
  }
}

export default Home;
