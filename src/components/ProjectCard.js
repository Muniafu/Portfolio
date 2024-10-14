// Individual project details (image, title, description)

import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectCard.css";

const ProjectCard = ({
    title, description, image, technologies, category, year, link
}) => {

    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image" />
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-info">
                    <span className="project-category">{category}</span>
                    <span className="project-year">{year}</span>
                </div>
                <div className="project-tech">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-item">{tech}</span>
                    ))}
                </div>

                <Link to={link} className="project-link">View Projects...</Link>
            </div>
        </div>
    );
};

export default ProjectCard;