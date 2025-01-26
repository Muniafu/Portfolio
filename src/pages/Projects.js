import { useContext } from "react";
import { projectsData } from "../components/Projects";
import  "../styles/ProjectPage.css";
import { ThemeContext } from "../context/ThemeContext";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
    const { theme } = useContext(ThemeContext);
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === parseInt(id));

    if (!project) {
        return <div className="project-detail-container">Project not found!</div>
    }

    return (
        <div className={`project-detail-container ${theme}`}>
            {/* Project Overview */}
            <section className="project-overview">
                <h1>{project.title}</h1>
                <img src={`/images/${project.id}.jpg`} alt={project.title} className="project-image" />
                <p>{project.description}</p>
            </section>

            {/* Project Process */ }
            <section className="project-process">
                <div className="text-content">
                    <h2>Project Process</h2>
                    <p>
                        this project aimed to solve a problem using {project.technologies.join(", ")}.
                        Here's how I approached it: research, planning, development and deployment.
                    </p>
                    <h3>Challenges Faced</h3>
                    <p>
                        some challenges included optimizing performance, improving UI/UX and fixing security issues.
                    </p>
                </div>
                <div className="image-content">
                    <img src={`/images/${project.id}-process.jpg`} alt="Process img" />
                </div>
            </section>

            {/* Gallery Section */}
            <section className="project-gallery">
                <h2>Gallery / Demo</h2>
                <div className="gallery">
                    <img src={`/images/${project.id}-1.jpg`} alt="Gallery img 1" />
                    <img src={`/images/${project.id}-2.jpg`} alt="Gallery img 2" />
                    <img src={`/images/${project.id}-3.jpg`} alt="Gallery img 3" />
                </div>
            </section>

            {/* Call-to-Action */}
            <section className="project-cta">
                <h2>See More </h2>
                <a href={project.github} className="btn">Github Repo</a>
                <a href={project.liveDemo} className="btn">Live Demo</a>
                <a href={project.caseStudy} className="btn">Download Case Study</a> 
            </section>

            {/* Related Projects */}
            <section className="related-projects">
                <h2>Related Projects</h2>
                <div className="related-grid">
                    {projectsData
                        .filter((p) => p.id !== project.id)
                        .slice(0, 3)
                        .map((related) => (
                            <div key={related.id} className="related-card">
                                <img src={`/images/${related.id}.jpg`} alt={related.title} />
                                <h3>{related.title}</h3>
                                <a href={`/projects/${related.id}`} className="btn">View Project</a>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default ProjectPage;