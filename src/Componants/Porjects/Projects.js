import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Porjects.css';
import { faCodepen, faFacebookF, faGithub, faLinkedinIn, faMediumM, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import Header from '../Header/Header';
import portfolioThird from "../../images/volunteer-network.png";
import portfolioSecond from "../../images/travel-guru-booking.png";
import portfolioFirst from "../../images/creative-agency-site.png";
import {faLink } from '@fortawesome/free-solid-svg-icons';


const Projects = () => {
    return (
        <div>
            {/* Navbar start */}
            <Header></Header>

            {/* Main body start */}
            <main className="main-body-portfolio">
                <div className = "social-icons-home">
                    <a href = 'https://github.com/Mosiur-Rahman-1' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faGithub} className = "icon-nav"></FontAwesomeIcon></a>
                    <a href = 'https://www.linkedin.com/in/mosiur-rahaman/' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faLinkedinIn} className = "icon-nav"></FontAwesomeIcon></a>
                    <a href = 'https://stackoverflow.com/users/13975652/mosiur-rahaman' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faStackOverflow} className = "icon-nav"></FontAwesomeIcon></a>
                    <a href = 'https://codepen.io/mosiur-rahman-1' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faCodepen} className = "icon-nav"></FontAwesomeIcon></a>
                    <a href = 'https://medium.com/@masiurreheman01' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faMediumM} className = "icon-nav"></FontAwesomeIcon></a>
                    <a href = 'https://www.facebook.com/masiur.reheman/' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faFacebookF} className = "icon-nav"></FontAwesomeIcon></a>
                </div>

                {/* <!-- Hero section --> */}
                <section className="hero-section">
                    <div>
                        <div class="hero-line"></div>
                        <h1 className="hero-text">Proudly presenting my<span className = "dot-color-projects">.work</span></h1>
                        <h2 className="hero-para">Explore some examples of what i have created</h2>
                    </div>
                </section>
                </main>
                {/* <!-- Portfolio section --> */}
                <section className = "portfolio-items main-body-portfolio">

                    {/* First portfolio */}
                    <div className = "d-flex row no-gutters align-items-center">
                        <div className = "col-md-6">
                            <img className = "img-fluid" src= {portfolioFirst} alt="travel guru website"/>
                        </div>
                        <div className = "col-md-6 text-white porfolio-first p-4">
                            <h2 className ="project-heading"><span className = "dot-color-projects">.</span>Creative agency</h2>
                            <p className = "pt-2">A agency website that offers various web services and let clients choose their specific projects, budget and submit the feedback based on experience.</p>
                            <div className = "skills d-flex flex-wrap">
                                <span>JavaScript</span>
                                <span>ES6</span>
                                <span>React.js</span>
                                <span>Node.js</span>
                                <span>MongoDB</span>
                                <span>NPM</span>
                                <span>Firebase</span>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>Bootstrap</span>
                                <span>Material UI</span>
                            </div>
                            <div className = "skills d-flex pt-4">
                                client-side:<a href = 'https://github.com/Mosiur-Rahman-1/creative-agency-client' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faGithub} className = "icon-nav ml-2 mr-4"></FontAwesomeIcon></a>
                                server-side: <a href = 'https://github.com/Mosiur-Rahman-1/creative-agency-server' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faGithub} className = "icon-nav ml-2 mr-4"></FontAwesomeIcon></a>
                                live: <a href = 'https://creative-agency-sites.netlify.app/' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faLink} className = "icon-nav ml-2"></FontAwesomeIcon></a>
                            </div>
                        </div>
                    </div>

                    {/* second portfolio */}
                    <div className = "d-flex row no-gutters align-items-center mt-5">
                        <div className = "col-md-6">
                            <img className = "img-fluid" src= {portfolioThird} alt="travel guru website"/>
                        </div>
                        <div className = "col-md-6 text-white porfolio-second p-4">
                            <h2 className ="project-heading"><span className = "dot-color-projects">.</span>Volunteer network</h2>
                            <p className = "pt-2">A non profit organization that offers numerous volunteer activities that let people register for a specific or multiple volunteer task.</p>
                            <div className = "skills d-flex flex-wrap">
                                <span>JavaScript</span>
                                <span>ES6</span>
                                <span>React.js</span>
                                <span>Node.js</span>
                                <span>MongoDB</span>
                                <span>NPM</span>
                                <span>Firebase</span>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>Bootstrap</span>
                                <span>Material UI</span>
                            </div>
                            <div className = "skills d-flex pt-4">
                                client-side:<a href = 'https://github.com/Mosiur-Rahman-1/volunteer-network-client' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faGithub} className = "icon-nav ml-2 mr-4"></FontAwesomeIcon></a>
                                server-side: <a href = 'https://github.com/Mosiur-Rahman-1/volunteer-network-server' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faGithub} className = "icon-nav ml-2 mr-4"></FontAwesomeIcon></a>
                                live: <a href = 'https://volunteer-network-react-app.netlify.app/' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faLink} className = "icon-nav ml-2"></FontAwesomeIcon></a>
                            </div>
                        </div>
                    </div>

                    {/* Thrid portfolio */}
                    <div className = "d-flex row no-gutters align-items-center mt-5">
                        <div className = "col-md-6">
                            <img className = "img-fluid" src= {portfolioSecond} alt="travel guru website"/>
                        </div>
                        <div className = "col-md-6 text-white porfolio-third p-4">
                            <h2 className ="project-heading"><span className = "dot-color-projects">.</span>Travel Guru</h2>
                            <p className = "pt-2">A travel company website that offers people to search hotels and register for their vacations in preffered location.</p>
                            <div className = "skills d-flex flex-wrap">
                                <span>JavaScript</span>
                                <span>ES6</span>
                                <span>React.js</span>
                                <span>Node.js</span>
                                <span>MongoDB</span>
                                <span>NPM</span>
                                <span>Firebase</span>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>Bootstrap</span>
                                <span>Material UI</span>
                            </div>
                            <div className = "skills d-flex pt-4">
                                client-side:<a href = 'https://github.com/Mosiur-Rahman-1/travel-guru' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faGithub} className = "icon-nav ml-2 mr-4"></FontAwesomeIcon></a>
                                server-side: <a href = 'https://github.com/Mosiur-Rahman-1/travel-guru' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faGithub} className = "icon-nav ml-2 mr-4"></FontAwesomeIcon></a>
                                live: <a href = 'https://travel-guru-booking.netlify.app/' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faLink} className = "icon-nav ml-2"></FontAwesomeIcon></a>
                            </div>
                        </div>
                    </div>

                    {/* view all projects */}
                    <div class="more-work">
                        <p class="more-work-text">All works <span className = "dot-color-projects">↗</span></p>
                        
                    </div>
{/*                     
                    All work button
                    <div className="copyright-portfolio">
                        <FontAwesomeIcon icon = {faCopyright} className = "icon-nav mt-3"></FontAwesomeIcon>
                        <p className="hero-scroll-text"><a href="#">mosiurrahman 2020</a></p>
                    </div> */}
                </section>
        </div>
    );
};



export default Projects;