import React, { Component, createContext } from 'react';
import "./portfolio.css";
// import posed from 'react-pose';
import { motion, MotionConfig, useMotionValue, useTransform } from "framer-motion"



class Portfolio extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            projects: [
                {
                    id: 6,
                    image:"Images/kino-logo.png",
                    title:"Kino",
                    description: "A social network for movie buffs! Search for movies, post reviews, and vote on other user's comments. Built with Firebase and React Bootstrap.",
                    link: "https://kino-e29ae.web.app/",
                    code: "https://github.com/JakeG6/kino"
                },
                {
                    id: 3,
                    image:"Images/appli-logo.png",
                    title:"APPLi",
                    description: "This full-stack site lets users create, retrieve, update, and delete posts track their job application progess while looking for work. Built with Express, Passport.js, mySQL, and Material-UI.",
                    link: "https://appli-c52u.onrender.com",
                    code: "https://github.com/JakeG6/appli-front"
                },
                {
                    id: 4,
                    image:"Images/super.jpg",
                    title:"Excelsior",
                    description: "Search a custom MongoDB database for a variety of famous superheroes and villains. The site administrator can even upload and create new characters with a browser interface.",
                    link: "https://excelsior-axp0.onrender.com",
                    code: "https://github.com/JakeG6/excelsior-front"
                },
                {   
                    id: 1, 
                    image:"Images/flat-calculator.png",
                    title:"Calculator",
                    description: "Use this basic calculator to perform addition, subtraction, multiplication, and division.",
                    link: "https://react-calculator-eqf7.onrender.com",
                    code: "https://github.com/JakeG6/react-calculator"
                },
                {
                    id: 2,
                    image:"Images/quote-machine-flat.png",
                    title:"Quote Machine",
                    description: "Press the button and receive a random inspirational or memorable quote delivered fresh from an API!",
                    link: "https://quote-machine-sb5f.onrender.com",
                    code: "https://github.com/JakeG6/quote-machine"
                },               
                {
                    id: 5,
                    image:"Images/jacksorbetter.jpg",
                    title:"Jacks or Better",
                    description: "The popular casino game comes to React. Try your hand at a few rounds of this classic video poker variant: No actual betting required! Built as part of an application to a resort company.",
                    link: "https://jacks-or-better.onrender.com",
                    code: "https://github.com/JakeG6/jacks-or-better"
                }
            ],
            
        }

    }

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
            <div>
                {/* <div >
                     <h2 className="page-logo" alt="portfolio logo">PORTFOLIO</h2>
                </div> */}
                <section id="portfolio">
                    {this.state.projects.map(project=> {
                        return (
                            <motion.a whileHover={{ scale: 1.05, boxShadow: '0px 5px 10px rgba(0,0,0,0.9)' }} className="item" key={project.id.toString()}>
                                <a href={project.link} style={styles.a}>
                                    <img className="portfolio-img" alt="project representation" src={project.image} />
                                </a>
                                <a href={project.link} className="title-anchor">
                                    <h3 className="title">{project.title}</h3>
                                </a>       
                                <p className="page-description">{project.description}</p>
                                <a href={project.code} target="_blank" className="code-button">Source Code</a>
                            </motion.a>    
                        )
                    })}	             
                </section>		
            </div>
        );
        
    }
}

export default Portfolio;