import React, { Component } from 'react';
import './Skills.css';

import { technologyList } from './technologyList';

class Skills extends Component {
    

    render() {

        return (
            <div className="Skills">
                <div >
                    <img className="page-logo" src="Images/skills-logo.png" alt="skills logo"/>
                </div>
                <section id="skills">
                    <div className="skill-description-box">
                        <div className="tech-skills">
                            {
                                technologyList.map(technology => {
                                    return(
                                    <div key={technologyList.indexOf(technology).toString()}>
                                        <img src={technology.image} alt={`Logo of ${technology.name}`} height="150" width="150" />
                                        <p>{technology.name}</p>
                                    </div>
                                    )
                            })
                            }
                        </div>
                        <p className="skill-description">
                        In addition to my web development skills, I'm also fully trained in these other programs:
                        </p>
                    </div>
                    
                    <div className="skills-container">
                        <div className="skill-item">
                            <object className="skill-svg" alt="Logo for Adobe premiere" data="Images/premierelogo.svg"></object>
                            <h3 className="title">Premiere</h3>
                        </div>
                        <div className="skill-item">
                            <object className="skill-svg" alt="Logo for Adobe After Effects" data="Images/aelogo.svg"></object>
                            <h3 className="title">After Effects</h3>
                        </div>
                        <div className="skill-item">
                            <object className="skill-svg" alt="Logo for Adobe Photoshop" data="Images/photoshoplogo.svg"></object>	
                            <h3 className="title">Photoshop</h3>
                        </div>
                        <div className="skill-item">
                            <object className="skill-svg" alt="Logo for Adobe Illustrator" data="Images/illustratorlogo.svg"></object>
                            <h3 className="title">Illustrator</h3>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Skills;
