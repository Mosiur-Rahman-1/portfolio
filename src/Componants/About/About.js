import React from 'react';
import './About.css';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faFacebookF, faGithub, faLinkedinIn, faMediumM, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div>
           <header className="nav-bar">
                <nav className="main-menu">
                    <div className="logo"><Link to="/">Mosiur Rahman.</Link></div>
                    <ul className = "nav-links">
                        <Link to="/"><li><span class="color">.home</span></li></Link>
                        <Link to="/projects"><li>.projects</li></Link>
                        <Link to="/"><li>.blog</li></Link>
                        <a href="https://drive.google.com/file/d/1JbxAWNWg9Lta3Oh-sG2EVe-mxJ7YXaSK/view?usp=sharing" target= "_blank"><li>.resume</li></a>
                        <Link to="/about"><li>.about</li></Link>
                        <Link to="/contact"><li className = "contact">contact ↗</li></Link>
                    </ul>
                </nav>
            </header>
                <main className="main-body-about">

                    <div className = "social-icons-about">
                        <a href = 'https://github.com/Mosiur-Rahman-1' target = "_blank"><FontAwesomeIcon icon = {faGithub} className = "icon-nav"></FontAwesomeIcon></a>
                        <a href = 'https://www.linkedin.com/in/mosiur-rahaman/' target = "_blank"><FontAwesomeIcon icon = {faLinkedinIn} className = "icon-nav"></FontAwesomeIcon></a>
                        <a href = 'https://stackoverflow.com/users/13975652/mosiur-rahaman' target = "_blank"><FontAwesomeIcon icon = {faStackOverflow} className = "icon-nav"></FontAwesomeIcon></a>
                        <a href = 'https://codepen.io/mosiur-rahman-1' target = "_blank"><FontAwesomeIcon icon = {faCodepen} className = "icon-nav"></FontAwesomeIcon></a>
                        <a href = 'https://medium.com/@masiurreheman01' target = "_blank"><FontAwesomeIcon icon = {faMediumM} className = "icon-nav"></FontAwesomeIcon></a>
                        <a href = 'https://www.facebook.com/masiur.reheman/' target = "_blank"><FontAwesomeIcon icon = {faFacebookF} className = "icon-nav"></FontAwesomeIcon></a>
                    </div>

                    {/* <!-- Header part --> */}
                        <section className="hero-section-about d-flex flex-row">
                            <div className= "col-md-7 pl-0 pr-5">
                                <div class="hero-line"></div>
                                <h1 className="hero-text">About<span className = "dot-color-about">.me</span></h1>
                                <p className="text-white">Professionally connected with the web development industry<br/> and information technology for many years.</p>
                                <p className = "text-white">Well-organised person, problem solver, independent employee<br/> with high attention to detail. Fan of outdoor activities,<br/> TV series and learning new things. Remote employment is preferred.</p>
                                <p className="text-white">Interested in the frontend projects. Especially MERN stack.</p>
                            </div>
                            <div className= "col-md-5 text-white pr-0 ml-5">
                                <h4>My web skills</h4>
                                <div class="hero-line"></div>
                                <div className = "skills d-flex flex-wrap">
                                    <span>JavaScript</span>
                                    <span>ES6</span>
                                    <span>React.js</span>
                                    <span>Node.js</span>
                                    <span>Express.js</span>
                                    <span>MongoDB</span>
                                    <span>Redux.js</span>
                                    <span>REST API</span>
                                    <span>NPM</span>
                                    <span>Firebase</span>
                                    <span>Git</span>
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>Bootstrap</span>
                                    <span>Material UI</span>
                                </div>
                            </div>
                        </section>

                        <div className="copyright">
                                <FontAwesomeIcon icon = {faCopyright} className = "icon-nav mt-3"></FontAwesomeIcon>
                                <p className="hero-scroll-text"><a href="#">mosiurrahman 2020</a></p>
                        </div>
                </main>
        </div>
    );
};

export default About;