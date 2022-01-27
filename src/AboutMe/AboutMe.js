import React, { Component } from 'react';

import { motion, AnimatePresence, MotionConfig, useMotionValue, useTransform } from "framer-motion";

class AboutMe extends Component {

  render() {

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div >
            <h2 className="page-logo" alt="portfolio logo">ABOUT ME</h2>
            </div>
            <section className="profile">
                {/* <div className="profile-top">
                </div>
                <img className="profile-picture" src="Images/rainforest1.jpg" alt="A forest"/> */}
                <p className="about-me">I'm a web developer originally from Honolulu, Hawaii. In 2017 I decided to switch careers from film and video production by attending the code bootcamp at DevMountain, followed by additional instruction at Helio Training, where I've received a certificate of proficiency in Full Stack Web Development, with an eye for React and Node. Since then I've continued to expand my repertoire of skills; My current project will be utilizing Python, GraphQL and Docker. Most recently I worked with the front-end team at GetDocsNow.com, where I wrote the UI in Typescript while assisting on the project's MySQL database.</p>
            </section>
        </motion.div >
    );
  }
}

export default AboutMe;
