import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <header class="nav-bar">
                <nav class="main-menu">
                    <div class="logo"><Link to="/">Mosiur Rahaman.</Link></div>
                    <ul>
                        <Link to="/"><li><span class="color">.home</span></li></Link>
                        <Link to="/"><li>.projects</li></Link>
                        <Link to="/"><li>.blog</li></Link>
                        <Link to="/"><li>.resume</li></Link>
                        <Link to="/"><li>.about</li></Link>
                        <Link to="/"><li className = "contact">contact ↗</li></Link>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Home;