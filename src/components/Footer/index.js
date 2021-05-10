import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
    return (
    <footer class="footer footer-style">
        <div class="inline">
            <a href="https://www.facebook.com/coletta.mike/" class="fa fa-facebook"></a>
            <a href="https://twitter.com/MeColetta" class="fa fa-twitter"></a>
            <a href="https://www.instagram.com/mecoletta/" class="fa fa-instagram"></a>
            <p class="copyright">© Copyright 2021 Michael Coletta</p>
        </div>
    </footer>
    )
}

export default Footer;