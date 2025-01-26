import { useContext, useEffect } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
    const { theme } = useContext(ThemeContext);

    // Scroll Animation Effect
    useEffect(() => {
        const handleScroll = () => {
            document.querySelectorAll(".fade-in").forEach((el) => {
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
        <div className={`contact-page ${theme}`}>
            {/* Contact Form Section */}
            <section className="contact-section container-fluid">
                <div className="row align-items-center">
                    {/* Contact Form */}
                    <div className="clo-lg-6 col-md-12 fade-in">
                        <h2>Contact Me</h2>
                        <form className="contact-form">
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>

                    {/* Contact Info & Social Links */}
                    <div className="col-lg-6 col-md-12 fade-in">
                        <h3>Connect with Me</h3>
                        <p>Email: your.email@example.com</p>
                        <div className="social-icons">
                            <a href="#" className="social-link"><FaGithub size={30} /></a>
                            <a href="#" className="social-link"><FaLinkedin size={30} /></a>
                            <a href="#" className="social-link"><FaTwitter size={30} /></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Map Section */}
            <section className="map-section fade-in">
                <h3>My Location</h3>
                <div className="map-container">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812.8228752768796!2d36.980098263447246!3d-1.4522606769718187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f756e9a064ddd%3A0xbecf84689fed078c!2sDunroamin%20Apartment%20Phase%201!5e0!3m2!1sen!2sus!4v1737896794362!5m2!1sen!2sus" 
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </div>
    )
}

export default Contact;