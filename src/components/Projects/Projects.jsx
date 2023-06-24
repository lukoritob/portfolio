import React from 'react';
import "./Projects.css";
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import { projectsData } from './../../Assets/projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div className='section-container'>
            < Header
                heading="My Projects"
                details="Here is a few cool things, I've worked on, do check them out!" />
            <div className="project-cards-container">
                {
                    projectsData.map(({ projectName, projectDescription, imageUrl, projectUrl }) => {
                        return <ProjectCard
                            projectName={projectName}
                            projectDescription={projectDescription}
                            imageUrl={imageUrl}
                            projectUrl={projectUrl}
                        />
                    })
                }
            </div>
            <FooterLink
                phrase="check out " link="my skills!" toAdress="/skills" />
        </div>
    )
}
export default Projects;

