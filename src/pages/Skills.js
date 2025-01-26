import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"
import Modal from "../components/Modal";
import "../styles/Skills.css";

const Skills = () => {
    const { theme } = useContext(ThemeContext);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to handle skill click and open modal
    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
        setIsModalOpen(true);
    };

    //Scroll Animation Effect
    useEffect(() => {
        const handleScroll =() => {
            document.querySelectorAll(".skill-item").forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 50) {
                    el.classList.add("visible");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`skill-page ${theme}`}>
            <section className="skills-section container-fluid">
                <h2>Skills & Expertise</h2>
                <div className="skills-grid">
                    {[
                        { name: "Javascript", icon: "devicon-javascript-plain", projects: ["Portfolio Website", "E0commerce App"] },
                        { name: "React", icon: "devicon-react-original", projects: ["Dashboard UI", "Chat App"] },
                        { name: "Node.js", icon: "devicon-nodejs-plain", projects: ["REST APIs", "Real-time Chat"] },
                        { name: "Bootstrap", icon: "devicon-bootstrap-plain", projects: ["Landing Pages", "Admin Panel"] },
                        { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", projects: ["Modern UI", "Blog Design"] },
                        { name: "Dart/Flutter", icon: "devicon-dart-flutter-plain", projects: ["Mobile App", "Finance Tracker"] },
                        { name: "Laravel", icon: "devicon-laravel-plain", projects: ["CMS System", "E-commerce Backend"] },
                        { name: "MySQL", icon: "devicon-mysql-plain", projects: ["Database Management", "User Authentication"] },
                    ].map((skill, index) => (
                        <div key={index} className="skill-item" onClick={() => handleSkillClick(skill)}>
                            <i className={skill.icon}></i>
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {isModalOpen && <Modal skill={selectedSkill} onclose={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default Skills;