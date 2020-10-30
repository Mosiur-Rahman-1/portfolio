import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faFacebookF, faGithub, faLinkedinIn, faMediumM, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faCopyright} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import { faSmileWink } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div>
            {/* Navbar start */}
            <header className="nav-bar">
                <nav className="main-menu">
                <div className="logo"><Link to="/">Mosiur Rahman.</Link></div>
                    <ul className = "nav-links">
                        <Link to="/"><li><span className="color">.home</span></li></Link>
                        <Link to="/projects"><li><span className = "dot-color-projects">.</span>projects</li></Link>
                        <Link to="/"><li><span className = "dot-color-blog">.</span>blog</li></Link>
                        <a href="https://drive.google.com/file/d/1JbxAWNWg9Lta3Oh-sG2EVe-mxJ7YXaSK/view?usp=sharing" target= "_blank"><li><span className = "dot-color-resume">.</span>resume</li></a>
                        <Link to="/about"><li><span className = "dot-color-about">.</span>about</li></Link>
                        <Link to="/contact"><li className = "contact">contact ↗</li></Link>
                    </ul>
                </nav>
            </header>


            {/* Main body start */}
            <main className="main-body-home">
                <div className = "social-icons-contact">
                        <a href = 'https://github.com/Mosiur-Rahman-1' target = "_blank"><FontAwesomeIcon icon = {faGithub} className = "icon-nav"></FontAwesomeIcon></a>
                        <a href = 'https://www.linkedin.com/in/mosiur-rahaman/' target = "_blank"><FontAwesomeIcon icon = {faLinkedinIn} className = "icon-nav"></FontAwesomeIcon></a>
                        <a href = 'https://stackoverflow.com/users/13975652/mosiur-rahaman' target = "_blank"><FontAwesomeIcon icon = {faStackOverflow} className = "icon-nav"></FontAwesomeIcon></a>
                        <a href = 'https://codepen.io/mosiur-rahman-1' target = "_blank"><FontAwesomeIcon icon = {faCodepen} className = "icon-nav"></FontAwesomeIcon></a>
                        <a href = 'https://medium.com/@masiurreheman01' target = "_blank"><FontAwesomeIcon icon = {faMediumM} className = "icon-nav"></FontAwesomeIcon></a>
                        <a href = 'https://www.facebook.com/masiur.reheman/' target = "_blank"><FontAwesomeIcon icon = {faFacebookF} className = "icon-nav"></FontAwesomeIcon></a>
                </div>

            {/* <!-- Contact Us Section --> */}
            <section className="Material-contact-section section-padding section-dark">
            <div className="container ml-0">

                <div className="row mt-5">
                    {/* <!-- Section Titile --> */}
                   
                    <div className="col-md-6 mt-3 pl-0 contact-widget-section2 wow animated fadeInLeft text-white" data-wow-delay=".2s">
                        <div class="hero-line"></div>
                        <h1 className="section-title hero-text">Let's talk</h1>
                        <p>Starting a web project is confusing, specially when you are not sure about which technology to choose and the process you need to go through. I assume you might also facing that phase. Don't worry just send me a message and we will discuss about your projects and find out a solution that works <span><FontAwesomeIcon icon = {faSmileWink}></FontAwesomeIcon></span></p>

                        <div className="find-widget pt-4">
                        Address: D-401 painadi, shiddirganj, narayanganj, BD.
                        </div>
                        <div className="find-widget">
                        Phone:  <a href="tel: ++880 153-229-7554">+880 153-229-7554</a>
                        </div>
                        
                        <div className="find-widget">
                        Website:  <a href="#">www.mosiurrahman.dev</a>
                        </div>
                        <div className="find-widget">
                        Available: Mon to Sat: 09:30 AM - 10.30 PM.
                        </div>
                    </div>
                    {/* <!-- contact form --> */}

                    <div className="col-md-6 wow pl-5 pr-0 animated fadeInRight" data-wow-delay=".2s">
                        <form className="shake" role="form" method="POST"  data-netlify="true" id="contactForm" name="contact-form" data-toggle="validator">
                            {/* <!-- Name --> */}
                            <div className="form-group label-floating">
                                <label className="control-label" for="name">Name</label>
                                <input className="form-control input-text-color" id="name" type="text" name="name" required data-error="Please enter your name"/>
                                <div className="help-block with-errors"></div>
                            </div>
                            {/* <!-- email --> */}
                            <div className="form-group label-floating">
                                <label className="control-label" for="email">Email</label>
                                <input className="form-control input-text-color" id="email" type="email" name="email" required data-error="Please enter your Email"/>
                                <div className="help-block with-errors"></div>
                            </div>
                            {/* <!-- Subject --> */}
                            <div className="form-group label-floating">
                                <label className="control-label">Subject</label>
                                <input className="form-control input-text-color" id="msg_subject" type="text" name="subject" required data-error="Please enter your message subject"/>
                                <div className="help-block with-errors"></div>
                            </div>
                            {/* <!-- Message --> */}
                            <div className="form-group label-floating">
                                <label for="message" className="control-label">Message</label>
                                <textarea className="form-control input-text-color" rows="3" id="message" name="message" required data-error="Write your message"></textarea>
                                <div className="help-block with-errors"></div>
                            </div>
                            {/* <!-- Form Submit --> */}
                            <div className="form-submit mt-5">
                                <button className="btn contact ml-0" type="submit" id="form-submit"><i className="material-icons mdi mdi-message-outline"></i> Send Message ↗</button>
                                <div id="msgSubmit" className="h3 text-center hidden"></div>
                                <div className="clearfix"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </section>

            {/* copyright text */}
            <div className="copyright">
                <FontAwesomeIcon icon = {faCopyright} className = "icon-nav mt-3"></FontAwesomeIcon>
                <p className="hero-scroll-text"><a href="#">mosiurrahman 2020</a></p>
            </div>
            </main>
        </div>
    );
};

export default Contact;