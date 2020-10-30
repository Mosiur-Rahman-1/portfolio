import React from 'react';
import './Blog.css';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faFacebookF, faGithub, faLinkedinIn, faMediumM, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faCopyright} from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
    return (
        <div>
            <header className="nav-bar">
                <nav className="main-menu">
                <div className="logo"><Link to="/">Mosiur Rahman.</Link></div>
                    <ul className = "nav-links">
                        <Link to="/"><li><span className="color">.home</span></li></Link>
                        <Link to="/projects"><li><span className = "dot-color-projects">.</span>projects</li></Link>
                        <Link to="/blog"><li><span className = "dot-color-blog">.</span>blog</li></Link>
                        <a href="https://drive.google.com/file/d/1JbxAWNWg9Lta3Oh-sG2EVe-mxJ7YXaSK/view?usp=sharing" target= "_blank"><li><span className = "dot-color-resume">.</span>resume</li></a>
                        <Link to="/about"><li><span className = "dot-color-about">.</span>about</li></Link>
                        <Link to="/contact"><li className = "contact">contact ↗</li></Link>
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
            <h1 className = "comming-soon hero-text">Blog comming soon ...</h1>
            <div className="copyright">
                <FontAwesomeIcon icon = {faCopyright} className = "icon-nav mt-3"></FontAwesomeIcon>
                <p className="hero-scroll-text"><a href="#">mosiurrahman 2020</a></p>
            </div>
            </main>
        </div>
    );
};

export default Blog;