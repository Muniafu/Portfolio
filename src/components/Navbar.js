// Navigation bar, links to different pages

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Projects</Link>
                </li>
                <li>
                    <Link to="/">Skills</Link>
                </li>
                <li>
                    <Link to="/">Testimonials</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;