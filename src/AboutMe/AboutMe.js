import React, { Component } from 'react';

import { motion, MotionConfig, useMotionValue, useTransform } from "framer-motion";

class AboutMe extends Component {

  render() {



    return (
      <div className="Component">
        <div >
          <h2 className="page-logo" alt="portfolio logo">ABOUT ME</h2>
        </div>
        <section className="profile">
          {/* <div className="profile-top">
          </div>
          <img className="profile-picture" src="Images/rainforest1.jpg" alt="A forest"/> */}
          <p className="about-me">I'm a web developer from Honolulu, Hawaii. In 2017 I decided to switch careers from Film and video production by attending DevMountain code bootcamp, followed by additional instruction at Helio Training, where I received a certificate of proficiency in Full Stack Web Development, with an eye for React and Node. Since then I've continued to grow and learn new skills, such as my current project which utilizes Python and Docker. Most recently I worked with the front-end team at getdocsnow.com, where I wrote the UI in Typescript while assisting on the project's MySQL database.</p>
        </section>
      

      </div>
    );
  }
}

export default AboutMe;
