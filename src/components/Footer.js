import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import "../styles/style.css";
import "../styles/Footer.css";

const Footer = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <footer className={`footer ${theme}`}>
            <div className="container text-center">
                <p>Connect with me: </p>
                <div className="mt-3">
                    <a href="https://github.com/Muniafu" className="me-2"><FaGithub size={24} /></a>
                    <a href="www.linkedin.com/in/elam-baraka-a09b5a1b8" className="me-2"><FaLinkedin size={24}/></a>
                    <a href="#"><FaTwitter size={24}/></a>
                </div>
                <p className="copyright">&copy; {new Date().getFullYear()} MyPortfolio. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;