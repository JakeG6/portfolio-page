import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="Component">
        <div >
          <h2 className="page-logo" alt="portfolio logo">WELCOME</h2>
        </div>
        <section className="profile">
          <div className="profile-top">
          </div>
          <img className="profile-picture" src="Images/rainforest1.jpg" alt="A forest"/>
          <p className="about-me">Hi, I'm a full-stack developer who loves Node-based technologies. 
            On this site you'll find my various projects and contact links. I'm excited to continue learning and putting all my skills to use.
            <a href="https://www.dropbox.com/s/xp9gvlf175lm1uk/JGuss_WebDev_Resume_numberless.pdf?dl=0" target="_blank" className="resume-button"> You can find my resume here!</a>
          </p>
        </section>   
      </div>
    );
  }
}

export default Home;
