import React, { Component } from 'react';
import './Skills.css';
import { technologyList } from './technologyList';

class Skills extends Component {

    render() {

        return (
            <div className="Skills">
                <div >
                    <h2 className="page-logo" alt="skills logo">SKILLS</h2>
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
                            <p>Premiere</p>
                        </div>
                        <div className="skill-item">
                            <object className="skill-svg" alt="Logo for Adobe After Effects" data="Images/aelogo.svg"></object>
                            <p>After Effects</p>
                        </div>
                        <div className="skill-item">
                            <object className="skill-svg" alt="Logo for Adobe Photoshop" data="Images/photoshoplogo.svg"></object>	
                            <p>Photoshop</p>
                        </div>
                        <div className="skill-item">
                            <object className="skill-svg" alt="Logo for Adobe Illustrator" data="Images/illustratorlogo.svg"></object>
                            <p >Illustrator</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Skills;
