import React, {useEffect} from "react";
// import M from 'materialize-css/dist/js/materialize.min'

export default function Navbar() {

    useEffect(() => {
        let sidenav = document.querySelector('#mobileMenu');
        window.M.Sidenav.init(sidenav, {});
    }, [])

    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper grey darken-3">
                <a href="/" className="brand-logo">Logo</a>
                <a href="http://localhost:3000" data-target="mobileMenu" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="http://localhost:3000">Home</a></li>
                    <li><a href="http://localhost:3000">Projects</a></li>
                    <li><a href="http://localhost:3000">Education</a></li>
                    <li><a href="http://localhost:3000">Contact</a></li>
                    <li><a href="http://localhost:3000">Resume</a></li>
                </ul>
            </nav>
            <ul className="sidenav" id="mobileMenu">
                <li><a href="http://localhost:3000">Home</a></li>
                <li><a href="http://localhost:3000">Projects</a></li>
                <li><a href="http://localhost:3000">Education</a></li>
                <li><a href="http://localhost:3000">Contact</a></li>
                <li><a href="http://localhost:3000">Resume</a></li>
            </ul>
        </div>


        // <p>Home | Projects | Resume</p>
        // <link> <a>Home </a> </link>
    );
}
