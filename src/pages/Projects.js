// Display a list/grid of all your projects

import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";

const projects = [
    {
        id: 1,
        title: "Project One",
        description: "A web design project using React",
        image: "/",
        technologies: ["React", "CSS", "Javascript"],
        category: "Web Development",
        year: 2024,
        link: "/project-one"
    },
    {
        id: 1,
        title: "Project Two",
        description: "A mobile app built with Flutter",
        image: "/",
        technologies: ["Flutter", "CSS", "Firebase"],
        category: "Mobile Development",
        year: 2024,
        link: "/project-two"
    }
];

const Projects = () => {

    return (
        <div className="projects-page">
            <h1 className="page-title">My Projects</h1>
            <div className="project-grid">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        technologies={project.technologies}
                        category={project.category}
                        year={project.year}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;