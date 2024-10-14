// Individual skill details(icon, name)

import React from "react";
import "../styles/SkillCard.css";

const SkillCard = ({
    skillName, proficiency, description, icon
}) => {

    return (
        <div className="skill-card">
            <img src={icon} alt={skillName} className="skill-icon" />
            <h3 className="skill-name">{skillName}</h3>
            <p className="proficiency">proficiency: {proficiency}</p>
            <p className="skill-description">{description}</p>
        </div>
    );
};

export default SkillCard;