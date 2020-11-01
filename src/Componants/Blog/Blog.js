import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faFacebookF, faGithub, faLinkedinIn, faMediumM, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faCopyright} from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';



const Blog = () => {
    return (
        <div>
            {/* Navbar start */}
            <Header></Header>

            {/* Main body start */}
            <main className="main-body-home">
                <div className = "social-icons-home">
                    <a href = 'https://github.com/Mosiur-Rahman-1' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faGithub} className = "icon-nav"></FontAwesomeIcon></a>
                    <a href = 'https://www.linkedin.com/in/mosiur-rahaman/' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faLinkedinIn} className = "icon-nav"></FontAwesomeIcon></a>
                    <a href = 'https://stackoverflow.com/users/13975652/mosiur-rahaman' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faStackOverflow} className = "icon-nav"></FontAwesomeIcon></a>
                    <a href = 'https://codepen.io/mosiur-rahman-1' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faCodepen} className = "icon-nav"></FontAwesomeIcon></a>
                    <a href = 'https://medium.com/@masiurreheman01' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faMediumM} className = "icon-nav"></FontAwesomeIcon></a>
                    <a href = 'https://www.facebook.com/masiur.reheman/' rel="noreferrer" target = "_blank"><FontAwesomeIcon icon = {faFacebookF} className = "icon-nav"></FontAwesomeIcon></a>
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