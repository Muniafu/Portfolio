// Individual testimonials (text, name. profile picture)

import React from "react";
import "../styles/TestimonialCard.css";

const TestimonialCard = ({
    name, title, company, testimonial, date, profilePic, linkedin
}) => {

    return (
        <div className="testimonial-card">
            <img src={profilePic} alt={name} className="profile-pic" />
            <h3 className="author-name">{name}</h3>
            <p className="author-title">{title}, {company}</p>
            <p className="testimonial-text">{testimonial}</p>
            <p className="testimonial-date">{date}</p>

            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                View Linkedin Profile
            </a>
        </div>
    );
};

export default TestimonialCard;