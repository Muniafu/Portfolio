// Showcase your technical skills

import React from "react";
import SkillCard from "../components/SkillCard";
import "../styles/Skills.css";

const skills = [
    {
        id: 1,
        category: "Programming Languages",
        skillName: "Javascript",
        proficiency: "Intermediate",
        description: "Experienced in modern Javascript frameworks such as React and Node.js.",
        icon: "javascript-icon-png"
    },
    {
        id: 2,
        category: "Frameworks & Libraries",
        skillName: "React",
        proficiency: "Intermediate",
        description: "Built a number of scalable web applications using React.",
        icon: "react-icon-png"
    },
    {
        id: 3,
        category: "Tools",
        skillName: "Git",
        proficiency: "Advanced",
        description: "Proficient with version control systems and team collaboration.",
        icon: "git-icon-png"
    }
];

const Skills = () => {
    const categories = [ ...new Set(skills.map(skill => skill.category))];

    return (
        <div className="skills-page">
            <h1 className="page-title">My Technical Skills</h1>
            {categories.map((category) => (
                <div key={category} className="skills-category">
                    <h2 className="category-title">{category}</h2>
                    <div className="skills-grid">
                        {skills.filter(skill => skill.category === category).map((skill) => (
                            <SkillCard
                                key={skill.id}
                                skillName={skill.skillName}
                                proficiency={skill.proficiency}
                                description={skill.description}
                                icon={skill.icon}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;