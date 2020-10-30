import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Porjects.css';
import { faCodepen, faFacebookF, faGithub, faLinkedinIn, faMediumM, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
const Projects = () => {
    return (
        <div>
            <header className="nav-bar">
                <nav className="main-menu">
                <div className="logo"><Link to="/">Mosiur Rahman.</Link></div>
                    <ul className = "nav-links">
                        <Link to="/"><li><span class="color">.home</span></li></Link>
                        <Link to="/projects"><li><span className = "dot-color-projects">.</span>projects</li></Link>
                        <Link to="/"><li><span className = "dot-color-blog">.</span>blog</li></Link>
                        <a href="https://drive.google.com/file/d/1JbxAWNWg9Lta3Oh-sG2EVe-mxJ7YXaSK/view?usp=sharing" target= "_blank"><li><span className = "dot-color-resume">.</span>resume</li></a>
                        <Link to="/about"><li><span className = "dot-color-about">.</span>about</li></Link>
                        <Link to="/"><li className = "contact">contact ↗</li></Link>
                    </ul>
                </nav>
            </header>
                <main className="main-body-home">

                    <div className = "social-icons-home">
                        <a href = 'https://github.com/Mosiur-Rahman-1' target = "_blank"><FontAwesomeIcon icon = {faGithub} className = "icon-nav"></FontAwesomeIcon></a>
                        <a href = 'https://www.linkedin.com/in/mosiur-rahaman/' target = "_blank"><FontAwesomeIcon icon = {faLinkedinIn} className = "icon-nav"></FontAwesomeIcon></a>
                        <a href = 'https://stackoverflow.com/users/13975652/mosiur-rahaman' target = "_blank"><FontAwesomeIcon icon = {faStackOverflow} className = "icon-nav"></FontAwesomeIcon></a>
                        <a href = 'https://codepen.io/mosiur-rahman-1' target = "_blank"><FontAwesomeIcon icon = {faCodepen} className = "icon-nav"></FontAwesomeIcon></a>
                        <a href = 'https://medium.com/@masiurreheman01' target = "_blank"><FontAwesomeIcon icon = {faMediumM} className = "icon-nav"></FontAwesomeIcon></a>
                        <a href = 'https://www.facebook.com/masiur.reheman/' target = "_blank"><FontAwesomeIcon icon = {faFacebookF} className = "icon-nav"></FontAwesomeIcon></a>
                    </div>

                    {/* <!-- Header part --> */}
                    <section className="hero-section">
                        <div>
                            <div class="hero-line"></div>
                            <h1 className="hero-text">I am proud of my<span className = "dot-color-projects">.work</span></h1>
                            <h2 className="hero-para">Explore some examples of what i created</h2>
                        </div>
                    </section>

                    {/* <!-- Portfolio part --> */}
                    <section className = "portfolio-items pl-0 pr-0">
                        <div className="items-first-row"></div>
                        <div className="items-first-second"></div>
                        <div className="items-first-second"></div>
                        <div className="items-first-row"></div>
                    </section>
                </main>
        </div>
    );
};

export default Projects;