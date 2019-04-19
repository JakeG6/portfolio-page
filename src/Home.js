import React, { Component } from 'react';



class Home extends Component {
  render() {
    return (
      <div className="Component">
        <section className="profile">
            <img className="profile-picture" src="Images/rainforest1.jpg" alt="Picture of me"/>
            <p className="about-me">Hi, I'm a full-stack developer who loves Node-based technologies. 
            On this site you'll find my various projects and contact links. I'm excited to continue learning and putting all my skills to use!</p>
        </section>        
      </div>
    );
  }
}

export default Home;
