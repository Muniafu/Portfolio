// Users to reach out to you (contact form, email, etc)

import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle form submission
        console.log(formData);
        alert("Message sent! Thank you for reaching out.");        
    };

    return (
        <div className="contact-container">

            {/* Professional Headshot */}
            <section className="contact-headshot">
                <img src="../assets/images/contact.png" alt="Elam" className="contact-photo" />
                <h1>Contact Me</h1>
                <p>I'd love to hear from you! Feel free to reach out with any questions, inquiries or collaboration opportunities.</p>
            </section>

            {/* Contact Form */}
            <section className="contact-form-section">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </section>

            {/* Contact Information */}
            <section className="contact-info">
                <h3>Get in Touch</h3>
                <p>
                    <strong>Email:</strong>
                    <a href="youremail@example.com">elambaraka2019@gmail.com</a>
                </p>
                <p>
                    <strong>Phone:</strong>
                    (Optional)
                    [Insert phone number here if you're comfortable sharing]
                </p>

                {/* Social Media Links */}
                <div className="social-media-links">
                    <h3>Connect with me:</h3>
                    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Linkedin</a>                    
                    <a href="https://www.twitter.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.instagram.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>

                {/* Location (Optional) */}
                <p>
                    <strong>Location:</strong>
                    [Your City,
                    Country
                    ]
                </p>

                {/* Response Time */}
                <p>
                    <strong>Response Time:</strong>
                    I typically response within 24 hours.
                </p>

                {/* Privacy Statement */}
                <p className="privacy-statement">
                    Your information will be kept confidential and will not be shared with third parties
                </p>
            </section>
        </div>
    );
}

export default Contact;