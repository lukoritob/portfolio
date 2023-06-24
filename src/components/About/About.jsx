import React from "react";
import "./About.css";
import Header from "../Header/Header";
import aboutVector from "./../../Assets/about_vector.png";
import FooterLink from "../FooterLink/FooterLink";
import aboutAnime from "./../../Assets/about_anime.gif";

const About = () => {
    return (
        <div className="section-container">
            <Header
                heading="About Me."
                details="SEO | WordPress Developer | Digital Marketer | Obsessed with React.js"
            />
            <div className="about-main">
                <div className="about-main-left">
                    {/* Sub section one */}
                    <h3 className="about-sub-head">React.js</h3>
                    <p className="about-details">
                        I am a skilled and passionate React developer with a strong background in creating dynamic and engaging web applications. As a React developer, I thrive on bringing ideas to life through clean, efficient, and scalable code. I am adept at leveraging React's powerful component-based architecture to build intuitive user interfaces that provide an exceptional user experience. My proficiency extends to popular libraries and frameworks such as React Router, and Axios, allowing me to efficiently handle state management, routing, and data fetching.
                    </p>
                    {/* Sub section two */}
                    <h3 className="about-sub-head">SEO</h3>
                    <p className="about-details">
                        I am a results-driven SEO expert with a deep passion for optimizing websites and driving organic traffic. With extensive experience in the field, I have developed a strong understanding of search engine algorithms, keyword research, on-page optimization, and link building strategies. Staying abreast of the ever-evolving SEO landscape is a priority for me. I actively monitor algorithm updates and industry trends, adapting strategies accordingly to maintain and improve website rankings. I am well-versed in white hat SEO practices, adhering to ethical standards and avoiding black hat techniques that could harm a website's long-term visibility.
                    </p>
                    {/* Sub section three */}
                    <h3 className="about-sub-head">WordPress Dev</h3>
                    <p className="about-details">
                        As a WordPress developer, I am well-versed in the core functionalities of the platform, as well as its extensive ecosystem of themes, plugins, and customizations. I am proficient in modifying existing themes as well as customizing plugins to achieve a unique and tailored look. I pay close attention to detail, ensuring that the design is pixel-perfect and the user experience is intuitive and engaging. Responsive design is always a priority, ensuring that websites look and function flawlessly across various devices and screen sizes.                    </p>
                </div>
                <div className="about-main-right">
                    <img src={aboutAnime} className="about-anime" alt="about animation" />
                </div>
            </div>

            <FooterLink
                phrase="Check out my "
                link="projects!"
                toAdress="/projects"
            />
            {/* Vector Frame */}
            <div className="vector-frame">
                <img src={aboutVector} className="about-vector" alt="about" />
            </div>
        </div>
    )
}

export default About;