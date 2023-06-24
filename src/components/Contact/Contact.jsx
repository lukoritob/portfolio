import React from 'react';
import "./Contact.css";
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import contactVector from "./../../Assets/contact_anime.png";
import github from "./../../Assets/gh.png";
import linkedin from "./../../Assets/li.png";
import instagram from "./../../Assets/in.png";
import web from "./../../Assets/web.png";

const Contact = () => {
    return (
        <div className='section-container'>
            < Header
                heading="Get in touch."
                details="Interested to collaborate? Feel free to drop me an email!" />
            <div className="contact-form-container">
                <form
                    action="https://formspree.io/f/meqbjoav"
                    method="POST"
                    className='contact-form'
                >
                    {/* Email Id Input */}
                    <input type="email" placeholder='Your Email ID' name='email' className='input-box email-input' />
                    {/* Email Body */}
                    <textarea name="message" placeholder='Your Message' type='text' className='input-box body-input'></textarea>
                    {/* Submit button */}
                    <button type='submit' className='contact-btn'>Send Email</button>
                </form>
            </div>
            <div className="social-icons-container">
                <a href="https://github.com/lukoritob" className='social-icon'>
                    <img src={github} alt="social" />
                </a>
                <a href="https://www.linkedin.com/in/itslukorito/" className='social-icon'>
                    <img src={linkedin} alt="social" />
                </a>
                <a href="https://www.instagram.com/itslukorito/" className='social-icon'>
                    <img src={instagram} alt="social" />
                </a>
                <a href="https://github.com/lukoritob" className='social-icon'>
                    <img src={web} alt="social" />
                </a>
            </div>
            <FooterLink
                phrase="read more " link="about me." toAdress="/about" />
            <div className="vector-frame">
                <img src={contactVector} alt="vector" className='about-vector' />
            </div>
        </div>
    )
}

export default Contact;