import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

import "../styles/About.css";

const About = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`about-page ${theme}`}>
            {/* Introduction Section */}
            <section className="intro-section container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-center">
                        <h1>About Me</h1>
                        <p>
                            I'm a passionate developer with a love for crafting beautiful and functional
                            digital experiences. I thrive on solving complex problems with creativity
                            and precision.
                        </p>
                    </div>
                    <div className="col-lg-6 image-container">
                        <img src="/profile.png" alt="Profile" className="img-fluid rounded" />
                    </div>
                </div>
            </section>

            {/* Timeline / Experience Section */ }
            <section className="timeline-section container-fluid">
                <h2>My Journey</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <span className="year">2023</span>
                        <p> Senior Developer at XYZ Company</p>
                    </div>
                    <div className="timeline-item">
                        <span className="year">2019</span>
                        <p> Senior Developer at XYZ Company</p>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="skill-section container-fluid">
                <h2>Skills & Expertise</h2>
                <div className="skills-grid">
                    <div className="skill-item"><i className="devicon-javascript-plain"></i>javascript</div>
                    <div className="skill-item"><i className="devicon-react-original"></i>React</div>
                    <div className="skill-item"><i className="devicon-nodejs-plain"></i>Node.js</div>
                    <div className="skill-item"><i className="devicon-bootstrap-plain"></i>Bootstrap</div>
                    <div className="skill-item"><i className="devicon-tailwindcss-plain"></i>Tailwind CSS</div>
                    <div className="skill-item"><i className="devicon-dart-plain"></i>Dart/Flutter</div>
                    <div className="skill-item"><i className="devicon-laravel-php"></i>Laravel</div>
                    <div className="skill-item"><i className="devicon-mysql-plain"></i>MySQL</div>
                </div>
            </section>
        </div>
    );
};

export default About;