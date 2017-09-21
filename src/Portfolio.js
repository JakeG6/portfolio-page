import React, { Component } from 'react';


class Portfolio extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            projects: [
                {
                    image:"Images/portfolio-1.png",
                    title:"Calculator",
                    description: "Use this interactive calculator to perform mathematical techniques."
                },
                {
                    image:"Images/portfolio-2.png",
                    title:"Quote Machine",
                    description: "Press the button and receive a random quote delivered fresh from an API!"
                },
                {
                    image:"Images/portfolio-3.png",
                    title:"Travel App",
                    description: "This project compares travel times based on different transportation methods and tells you the best one."
                }
                
            ],
            
        }

    }
    

    render() {
        return (
            <div>
                <img id="portfolio-png" src="Images/portfolio-logo.png" alt="portfolio logo"/>
                <h2 id="portfolio-name">PORTFOLIO</h2>
                <section id="portfolio">
                    {this.state.projects.map(project=> {
                        return (
                            <div className="item">
                                <img className="portfolio-img" src={project.image} />
                                <h3 className="title">{project.title}</h3>
                                <p className="page-description">{project.description}</p>
                            </div>    
                        )
                    })}	
                    {/* <div className="item marketing-page">
                        <img className="portfolio-img" src="Images/portfolio-1.png" alt="Picture of marketing page"/>
                        <h3 className="title">Marketing Page</h3>
                        <p className="page-description">This project shows the front page of a marketing website meant for a specific business I'm interested in.</p>
                    </div>
                    <div className="item search-page">
                        <img className="portfolio-img" src="Images/portfolio-2.png" alt="Picture of search page"/>	
                        <h3 className="title">Search Page</h3>
                        <p className="page-description">This project searches through a specific database to find information that the user is trying to look up.</p>
                    </div>
                    <div className="item travel-app">	
                        <img className="portfolio-img" src="Images/portfolio-3.png" alt="Picture of travel page"/>
                        <h3 className="title">Travel App</h3>
                        <p className="page-description">This project compares travel times based on different transportation methods and tells you the best one.</p>	
                    </div>
                    <div className="item map">
                        <img className="portfolio-img" src="Images/portfolio-4.png" alt="Picture of map"/>	
                        <h3 className="title">Map of Favorite Spots</h3>
                        <p className="page-description">This project uses mapping apis to plot points for my favorite spots in the city for a do-it-yourself walking tour.</p>
                    </div>
                    <div className="item photo-gallery">
                        <img className="portfolio-img" src="Images/portfolio-5.png" alt="Picture of photo gallery"/>
                        <h3 className="title">Photo Gallery</h3>
                        <p className="page-description">This project shows Pictures from a recent trip to the viewer and allows them to easily navigate through photos.</p>	
                    </div>
                    <div className="item calculator">
                        <img className="portfolio-img" src="Images/portfolio-6.png" alt="Picture of item calculator"/>	
                        <h3 classNamw="title">Calculator</h3>
                        <p className="page-description">Someone can enter in the numbers they want, and press the big blue button to get a result.</p>
                    </div> */}
                </section>		
        </div>
        );
    }
}

export default Portfolio;