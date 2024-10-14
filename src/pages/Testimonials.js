// Displays testimonials from clients or colleagues

import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import "../styles/Testimonials.css";

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        title: "CEO at Example Inc.",
        company: "Example Inc.",
        testimonial: "Working with [Your Name] has been a good game changer. Their technical expertise to delivering high-quality solutions is impressive.",
        date: "May 2024",
        profilePic: "john-doe.jpg",
        linkedin: "https://linkeidin.com/in/johndoe"
    },
    {
        id: 2,
        name: "Jane Smith",
        title: "CEO at TechCorp.",
        company: "TechCorp.",
        testimonial: "[Your Name]'s ability to solve complex problems and lead the development was crucial to our project's success.",
        date: "May 2024",
        profilePic: "jane-smith.jpg",
        linkedin: "https://linkeidin.com/in/janesmith"
    }
];

const Testimonials = () => {

    return (
        <div className="testimonials-page">
            <h1 className="page-title">What People Say...</h1>
            <div className="testimonials-grid">
                {testimonials.map(testimonial => (
                    <TestimonialCard
                        key={testimonial.id}
                        name={testimonial.name}
                        title={testimonial.title}
                        company={testimonial.company}
                        testimonial={testimonial.testimonial}
                        date={testimonial.date}
                        profilePic={testimonial.profilePic}
                        linkedin={testimonial.linkedin}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;