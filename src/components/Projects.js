import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/Projects.css";

export const projectsData = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A personal portfolio built with React and Bootstrap",
        technologies: ["React", "Bootstrap","CSS"],
    },
    {
        id: 1,
        title: "E-COmmerce App",
        description: "A fully functional e-commerce store with payment integration",
        technologies: ["React", "Node.js","MongoDB"],
    },
];

const Projects = () => {
    const { theme } = useContext(ThemeContext);
    const [filter, setFilter] = useState("All");

    // Filter projects based on category selection
    const filteredProjects =
        filter === "All"
        ? projectsData
        : projectsData.filter((project) =>
            project.technologies.includes(filter)
        );
    
    return (
        <div className={`projects-container ${theme}`}>
            {/* Projects Filter */}
            <div className="project-filters">
                <button onClick={() => setFilter("All")}>All</button>
                <button onClick={() => setFilter("React")}>React</button>
                <button onClick={() => setFilter("Bootstrap")}>Bootstrap</button>
                <button onClick={() => setFilter("Node.js")}>Node.js</button>
                <button onClick={() => setFilter("MongoDB")}>MongoDB</button>
                <button onClick={() => setFilter("Laravel")}>Laravel</button>
                <button onClick={() => setFilter("Firebase")}>Firebase</button>
                <button onClick={() => setFilter("PHP")}>PHP</button>
                <button onClick={() => setFilter("MySQL")}>MySQL</button>
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Call-to-Action */}
            <div className="cta-section">
                <button className="cta-button">See More Projects</button>
            </div>
        </div>
    );
};

export default Projects;