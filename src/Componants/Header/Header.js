import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';



const Header = () => {
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
        </div>
    );
};



export default Header;