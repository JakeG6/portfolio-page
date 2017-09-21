import React, { Component } from 'react';



class Skills extends Component {
  render() {
    return (
      	<div className="Skills">
            <div className="wrapper">
                <img id="skills-png" src="Images/skills-logo.png" alt="skills logo"/>
                <section id="skills">
                    <div className="skill-description-box">
                        <p className="skill-description">In addition to my web development skills, I'm also fully trained in these other programs:</p>
                    </div>
                    <div className="skill-list">
                        <ul>
                            <li>Premiere</li>
                            <li>After Effects</li>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                        </ul>
                    </div>
                    <div className="skills-container">
                        <div className="skill-item">
                            <object className="skill-svg" data="Images/premierelogo.svg"></object>
                            <h3 className="title">Premiere</h3>
                        </div>
                        <div className="skill-item">
                            <object className="skill-svg" data="Images/aelogo.svg"></object>
                            <h3 className="title">After Effects</h3>
                        </div>
                        <div className="skill-item">
                            <object className="skill-svg" data="Images/photoshoplogo.svg"></object>	
                            <h3 className="title">Photoshop</h3>
                        </div>
                        <div className="skill-item">
                            <object className="skill-svg" data="Images/illustratorlogo.svg"></object>
                            <h3 className="title">Illustrator</h3>
                        </div>
                    </div>
                </section>
            </div>	
      </div>
    );
  }
}

export default Skills;
