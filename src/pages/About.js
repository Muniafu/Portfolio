// Display information about you

import React from "react";

const About = () => {

    return (
        <div className="about-container">
            {/* Introduction */}
            <section className="about-intro">
                <h1>Hi, I'm Elam Muniafu</h1>
                <h2>Professional Title | Full-Stack Developer</h2>
                <p>I am a Full-Stack developer with a passion for creating impactful digital experiences.</p>
            </section>

            {/* Professional Background */}
            <section className="about-background">
                <h3> Professional Background </h3>
                <p>I have a diploma in Computer Engineering</p>
            </section>

            {/* Personal Story */}
            <section className="about-story">
                <h3>My Journey</h3>
                <p>My passion for Software Development started when I built my first website in high school. I am driven by passion/values and i'm continuously striving to grow and contribute to the tech community through my work.</p>
            </section>

            {/* Mission Statement */}
            <section className="about-mission">
                <h3>Mission</h3>
                <p>My mission is to create intuitive, accessible websites that make a difference. i aim to help businesses thrive by creating tailored user-friendly web experiences.</p>
            </section>
            {/* Portfolio Highlights */}
            <section className="about-highlight">
                <h3>Highlighted Projects</h3>
                <p>Some of the projects i'm most proud include employee performance platform from scratch, a hotel booking mobile app. You can explore more of my work in the Project section</p>
            </section>

            {/* Call to Action */}
            <section className="about-cta">
                <h3>Let's Collaborate</h3>
                <p>If you're looking to collaborate or have any questions, feel free to 
                    <a href="/contact">get in touch..</a> I', always open to discussing new ideas, projects or opportunities to connect.
                </p>
            </section>

            {/* Social Proof */}
            <section className="about-recognition">
                <h3>Awards & Testimonials</h3>
                <p>I've been recognized and clients have said...</p>
            </section>

            {/* Personal Touch */}
            <section className="about-personal">
                <h3>A little About Me</h3>
                <p>Outside of work, I enjoy photography and traveling and I'm always learning something new, whether it's a new technology or a creative hobby.</p>
            </section>

            {/* Links to Social Media */}
            <section className="about-social">
                <h3>Connect with Me...</h3>
                <p>Follow me on <a href="[Linkedin Profile]">Linkedin</a>, 
                or checkout my work on <a href="[Github Profile]">Github</a>.
                </p>
            </section>
        </div>
    );
};

export default About;