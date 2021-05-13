import React from "react";
import "./style.css";

function Navbar() {
    return (
<nav className="navbar sticky-top navbar-expand-md">
<div className="container-fluid">
    <a href="https://mikecoletta.github.io/React-Portfolio/" className="navbar-brand">
        <h1 className="navbar-name">Mike Coletta</h1>
    </a>
    <button className="navbar-toggler dropdownButton" type="button" data-toggle="collapse" data-target="#portfolio-navbar"
        aria-controls="portfolio-navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon dropdownIcon">-</span>
    </button>
    <div className="collapse navbar-collapse" id="portfolio-navbar">
        <ul className="navbar-nav ml-auto">
            <li className="dropdown-item">
                <a href="/about" className="navlink">About</a>
            </li>
            <li className="dropdown-item">
                <a href="/portfolio" className="navlink">Portfolio</a>
            </li>
            <li className="dropdown-item">
                <a href="/experience" className="navlink">Experience</a>
            </li>
            <li className="dropdown-item">
                <a href="/contact" className="navlink">Contact</a>
            </li>
        </ul>
    </div>
</div>
</nav>
    )
}

export default Navbar;