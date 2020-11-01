import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faEnvira, faFacebookF, faGithub, faLinkedinIn, faMediumM, faNodeJs, faNpm, faReact, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';

const About = () => {
    return (
        <div>
            {/* Navbar start */}
            <Header></Header>

            {/* Main body start */}
            <main className="main-body-about">
                <div className = "social-icons-about">
                    <a href = 'https://github.com/Mosiur-Rahman-1' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faGithub} className = "icon-nav"></FontAwesomeIcon></a>
                    <a href = 'https://www.linkedin.com/in/mosiur-rahaman/' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faLinkedinIn} className = "icon-nav"></FontAwesomeIcon></a>
                    <a href = 'https://stackoverflow.com/users/13975652/mosiur-rahaman' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faStackOverflow} className = "icon-nav"></FontAwesomeIcon></a>
                    <a href = 'https://codepen.io/mosiur-rahman-1' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faCodepen} className = "icon-nav"></FontAwesomeIcon></a>
                    <a href = 'https://medium.com/@masiurreheman01' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faMediumM} className = "icon-nav"></FontAwesomeIcon></a>
                    <a href = 'https://www.facebook.com/masiur.reheman/' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faFacebookF} className = "icon-nav"></FontAwesomeIcon></a>
                </div>

                {/* <!-- Hero part --> */}
                    <section className="hero-section-about d-flex flex-row">
                        <div className= "col-md-7 pl-0 pr-5">
                            <div class="hero-line"></div>
                            <h1 className="hero-text">About<span className = "dot-color-about">.me</span></h1>
                            <p className="text-white">Professionally connected with the web development industry<br/> and information technology for many years.</p>
                            <p className = "text-white">Well-organised person, problem solver, independent employee<br/> with high attention to detail. Fan of outdoor activities,<br/> TV series and learning new things. Remote employment is preferred.</p>
                            <p className="text-white">Interested in the frontend projects. Especially MERN stack.</p>
                        </div>
                        <div className= "col-md-5 text-white pr-0 ml-5">
                            {/* <div class="hero-line"></div> */}
                            <h5><span className = "dot-color-about">.</span>My web skills</h5>
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
                            <h5 className = "mt-4"><span className = "dot-color-about">.</span>My tech stack</h5>
                            <div className = "d-flex">
                                <div className = "tech-stack text-center">
                                    <FontAwesomeIcon icon = {faReact} className = "icon-about-stack tex-center mt-4 mb-2"></FontAwesomeIcon>
                                    <p>react.js</p>
                                </div>
                                <div className = "tech-stack text-center">
                                    <FontAwesomeIcon icon = {faNodeJs} className = "icon-about-stack tex-center mt-4 mb-2"></FontAwesomeIcon>
                                    <p>node.js</p>
                                </div>
                                <div className = "tech-stack text-center">
                                    <FontAwesomeIcon icon = {faEnvira} className = "icon-about-stack tex-center mt-4 mb-2"></FontAwesomeIcon>
                                    <p>mongoDB</p>
                                </div>
                                <div className = "tech-stack text-center">
                                    <FontAwesomeIcon icon = {faNpm} className = "icon-about-stack tex-center mt-4 mb-2"></FontAwesomeIcon>
                                    <p>npm</p>
                                </div>
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