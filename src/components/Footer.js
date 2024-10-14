// Footer Section of the website
import React from "react";
import "../styles/Footer.css";

const Footer = () => {

    return (
        <Footer className="footer-container">
            {/* Contact Information */}
            <div className="footer-contact">
                <h3>Contact Information</h3>
                <p>Email: 
                    <a href="mailto:your-email@example.com">elambaraka2019@gmail.com</a>
                </p>
                <p>Phone: 
                    <a href="tel:+123456789">+254 797465200</a>
                </p>
                <p>Address: Nairobi, Kenya</p>
            </div>

            {/* Social Media Links */}
            <div className="footer-socials">
                <h3>Connect with Me</h3>
            </div>

            {/* Quick Navigation Links */}
            <div className="footer-newsletter">
                <h3>Subscribe for Updates</h3>
                <form>
                    <input
                        type="email"
                        placeholder="Enter your email"
                    />
                    <button type="submit">Subscribe</button>
                </form>
            </div>

            {/* Copyright and Legal Links */}
            <div className="footer-button">
                <p>@ 2024 Muniafu. All rights reserved.</p>
                <ul>
                    <li>
                        <a href="/privacy-policy">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/terms-of-service">Terms of Service</a>
                    </li>
                </ul>
            </div>

            {/* Back to Top Button */}
            <div className="footer-back-to-top">
                <a href="#top">Back to Top</a>
            </div>
        </Footer>
    );
};

export default Footer;