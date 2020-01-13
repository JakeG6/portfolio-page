import React, { Component, createContext } from 'react';
import "./portfolio.css";
import posed from 'react-pose';


class Portfolio extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            projects: [
                {
                    id: 3,
                    image:"Images/appli-logo.png",
                    title:"APPLi",
                    description: "This full-stack site lets users create, retrieve, update, and delete posts track their job application progess while looking for work. Built with Express, Passport.js, mySQL, and Material-UI.",
                    link: "https://appli-front.herokuapp.com/",
                    code: "https://github.com/JakeG6/appli-front"
                },
                {
                    id: 4,
                    image:"Images/super.jpg",
                    title:"Excelsior",
                    description: "Search a custom MongoDB database for a variety of famous superheroes and villains. The site administrator can even upload and create new characters with a browser interface.",
                    link: "https://excelsior-front.herokuapp.com/",
                    code: "https://github.com/JakeG6/excelsior-front"
                },
                {   
                    id: 1, 
                    image:"Images/flat-calculator.png",
                    title:"Calculator",
                    description: "Use this basic calculator to perform addition, subtraction, multiplication, and division.",
                    link: "https://aesthetic-calculator.herokuapp.com/",
                    code: "https://github.com/JakeG6/react-calculator"
                },
                {
                    id: 2,
                    image:"Images/quote-machine-flat.png",
                    title:"Quote Machine",
                    description: "Press the button and receive a random inspirational or memorable quote delivered fresh from an API!",
                    link: "https://thequotemachine.herokuapp.com//",
                    code: "https://github.com/JakeG6/quote-machine"
                },
                
                
                {
                    id: 5,
                    image:"Images/illustration-list.png",
                    title:"The Greatest Redux List Ever",
                    description: "The project name may be hyperbole, but Redux is a much more effecient way to handle a central state in React. I'm glad I learned this powerful tool, and I'll be using it in any big React-based app in the future. Styled with Bootstrap.",
                    link: "https://redux-list.herokuapp.com/",
                    code: "https://github.com/JakeG6/redux-list"
                }
            ],
            
        }

    }

    render() {

        const Item = posed.div({
            hoverable: true,
            pressable: true,
            init: {
              scale: 1,
              bboxShadow: '-2px 4px 7px 2px rgba(0,0,0,0.75)'
            },
            hover: {
              scale: 1.05,
              boxShadow: '0px 5px 10px rgba(0,0,0,0.9)'
            },
            press: {
              scale: 1.025,
              boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
            }
        });

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
            <div>
                <div >
                     <h2 className="page-logo" alt="portfolio logo">PORTFOLIO</h2>
                </div>
                <section id="portfolio">
                    {this.state.projects.map(project=> {
                        return (
                            <Item className="item" key={project.id.toString()}>
                                <a href={project.link} style={styles.a}>
                                    <img className="portfolio-img" alt="project representation" src={project.image} />
                                </a>
                                <a href={project.link} className="title-anchor">
                                    <h3 className="title">{project.title}</h3>
                                </a>       
                                <p className="page-description">{project.description}</p>
                                <a href={project.code} target="_blank" className="code-button">Source Code</a>
                            </Item>    
                        )
                    })}	             
                </section>		
            </div>
        );
        
    }
}

export default Portfolio;