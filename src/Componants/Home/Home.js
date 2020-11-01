import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faFacebookF, faGithub, faLinkedinIn, faMediumM, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';



const Home = () => {
    return (
        <div>
            {/* Navigation */}
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

                {/* <!-- Hero part --> */}
                    <section className="hero-section">
                        <div>
                            <div class="hero-line"></div>
                            <p className = "text-white">Hello I'm</p>
                            <h1 className="hero-text">Mosiurrahman<span class="color">.dev</span></h1>
                            <h2 className="hero-para">Front End Web Developer</h2>
                            <p className = "text-white">Creating websites is easy but creating a meaningfull solution is<br/> Hard cause that requires passion. That's where i focus on.</p>
                        </div>
                    </section>
                    <div className="hero-scroll">
                        <FontAwesomeIcon icon = {faEnvelope} className = "icon-nav mt-3"></FontAwesomeIcon>
                        <p className="hero-scroll-text"><a href="#">masiurreheman01@gmail.com</a></p>
                    </div>
                    <div className="copyright">
                        <FontAwesomeIcon icon = {faCopyright} className = "icon-nav mt-3"></FontAwesomeIcon>
                        <p className="hero-scroll-text"><a href="#">mosiurrahman 2020</a></p>
                    </div>
            </main>
        </div>
    );
};



export default Home;