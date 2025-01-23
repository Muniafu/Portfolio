import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import "../styles/style.css";
import "../styles/Footer.css";

const Footer = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <footer className={`footer ${theme}`}>
            <p>Connect with me: </p>
            <div>
                <a href="#" className="me-2"><FaGithub size={24} /></a>
                <a href="#" className="me-2"><FaLinkedin size={24}/></a>
                <a href="#"><FaTwitter size={24}/></a>
            </div>
        </footer>
    );
};

export default Footer;