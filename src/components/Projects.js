import { FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";


const projects = [
    { title: "Project 1", tech: [<FaReact />, <FaNodeJs />] },
    { title: "Project 2", tech: [<FaReact />, <FaDatabase />] },
];

const Projects = () => {

    return (
        <section id="projects" className="container">
            <h2 className="text-center">Featured Projects</h2>
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                        <div className="project-thumbnail p-3 text-center">
                            <h3>{project.title}</h3>
                            <p>{project.tech}</p> {/* Fixing the paragraph closing tag */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;