import React, { Component } from 'react';
import { motion, MotionConfig, useMotionValue, useTransform } from "framer-motion";
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
      <div className="Component">
        <div >
          <h2 className="page-logo" alt="portfolio logo">WELCOME</h2>
        </div>
        <section className="profile">
          <div className="profile-top">
          </div>
          <img className="profile-picture" src="Images/rainforest1.jpg" alt="A forest"/>
          <p className="about-me">Hi, I'm a full-stack developer with over four years of experience who loves javascript-based web technologies and developing intricate programmatic systems. 
            On this site you'll find my various projects and contact links. I'm excited to continue learning and putting all my skills to use.
            <a href="https://www.dropbox.com/s/9ycagfflx36bkhw/JGuss_WebDev_Resume_Revised.pdf?dl=0" target="_blank" className="resume-button"> You can find my resume here!</a>
          </p>
        </section>

          <section id="portfolio">
            <motion.a whileHover={{ scale: 1.05, boxShadow: '0px 5px 10px rgba(0,0,0,0.9)' }} className="home-item">
              <a href="/portfolio" style={styles.a}>
                  {/* <img className="portfolio-img" alt="project representation" src={project.image} /> */}
              </a>
              <a href="/portfolio" className="title-anchor">
                  <h3 className="title">Portfolio</h3>
              </a>       
              <p className="page-description">All the things I've made</p>
            </motion.a>    
            <motion.a whileHover={{ scale: 1.05, boxShadow: '0px 5px 10px rgba(0,0,0,0.9)' }} className="home-item">
              <a href="/portfolio" style={styles.a}>
                  {/* <img className="portfolio-img" alt="project representation" src={project.image} /> */}
              </a>
              <a href="/portfolio" className="title-anchor">
                  <h3 className="title">Skills</h3>
              </a>       
              <p className="page-description">All the things I've made</p>
            </motion.a>    	
            <motion.a whileHover={{ scale: 1.05, boxShadow: '0px 5px 10px rgba(0,0,0,0.9)' }} className="home-item">
              <a href="/portfolio" style={styles.a}>
                  {/* <img className="portfolio-img" alt="project representation" src={project.image} /> */}
              </a>
              <a href="/portfolio" className="title-anchor">
                  <h3 className="title">Contact</h3>
              </a>       
              <p className="page-description">All the things I've made</p>
            </motion.a>    		             
          </section>		

      </div>
    );
  }
}

export default Home;
