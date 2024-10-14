// Landing page with an overview and navigation to other sections

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {

    return (
        <div className="home-container">

            {/* Header Section */}
            <header className="home-header">
                <div className="logo">
                    <h1>My Portfolio</h1>
                </div>
            </header>

            {/* Her Section */}
            <section  className="hero">
                <div className="hero-content">
                    <h2>Hi I'm Elam Muniafu</h2>
                    <p>I'm a FullStack Developer, specializing in Software Development. I help businesses and individuals create seamless digital experiences.</p>
                    <Link to="/projects" className="cta-button">View My Work</Link>
                </div>
                <div className="hero-image">
                    <img src="/" alt="Hero" />
                </div>
            </section>

            {/* Overview of Work (Featured Projects) */}
            <section className="featured-projects">
                <h3>Featured projects</h3>
                <div className="projects-grid">
                    <div className="projects-card">
                        <img src="/" alt="project 1" />
                        <h4>Employee Performance Platform</h4>
                        <p>Short description of this project</p>
                    </div>
                    <div className="projects-card">
                        <img src="/" alt="project 2" />
                        <h4>Apex Sales</h4>
                        <p>Short description of this project</p>
                    </div>
                    <div className="projects-card">
                        <img src="/" alt="project 3" />
                        <h4>Hotel Bookings</h4>
                        <p>Short description of this project</p>
                    </div>
                </div>

                <Link to="/projects" className="more-projects-link">See All Projects</Link>
            </section>

            {/* Brief SKills */}
            <section className="skills-overview">
                <h3>Skills</h3>
                <div className="skills-grid">
                    <div className="skill-item">
                        <i className="skill-icon fas fa-code"></i>
                        <p>Web Development</p>
                    </div>
                    <div className="skill-item">
                        <i className="skill-icon fas fa-pencil-alt"></i>
                        <p>Web Development</p>
                    </div>
                    <div className="skill-item">
                        <i className="skill-icon fas fa-database"></i>
                        <p>Web Development</p>
                    </div>
                </div>
            </section>

            {/* Testimonial Snippet */}
            <section className="testimonials-snippet">
                <h3>What People Say</h3>
                <div className="testimonials-container">
                    <div className="testimonial-card">
                        <p>"[Your Name] delivered a top-notch website that exceeded our expectations!"</p>
                        <h4>--Client Name--</h4>
                    </div>
                    <div className="testimonial-card">
                        <p>"[Your Name] was a pleasure, highly recommend for any project!"</p>
                        <h4>--Client Name--</h4>
                    </div>
                </div>

                <Link to="/testimonials" className="more-testimonials-link">Read More Testimonials</Link>                
            </section>

            {/* Footer */}
            <footer className="home-footer">
                <div className="social-links">
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    <a href="https://twitter.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <div className="contact-info">
                    <p>Email: 
                        <a href="youremail@example.com">youremail@example.com</a>
                    </p>
                    <p>Phone: 0797465200</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;