// Navigation bar, links to different pages

import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {

    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <NavLink to="/" 
                    exact 
                    activeClassName="active-link"
                    onClick={() => ("Home")}
                >
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about"
                    exact 
                    activeClassName="active-link"
                    onClick={() => ("About")}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects"
                    exact 
                    activeClassName="active-link"
                    onClick={() => ("Projects")}
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/skills"
                    exact 
                    activeClassName="active-link"
                    onClick={() => ("Skills")}
                    >
                        Skills
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/testimonials"
                    exact 
                    activeClassName="active-link"
                    onClick={() => ("Testimonials")}
                    >
                        Testimonials
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact"
                    exact 
                    activeClassName="active-link"
                    onClick={() => ("Contact")}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;