import React, {useEffect} from "react";

// import { Link, animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll"

export default function Navigationbar() {

    useEffect(() => {
        let sidenav = document.querySelectorAll('.sidenav');
        let instance = window.M.Sidenav.init(sidenav, {});
    }, [])

    return (
        <div>
            <div className="navbar-fixed navbar">
                <nav className="nav nav-wrapper grey darken-3">
                    <a href="/" className="brand-logo">Logo</a>
                    <a href="http://localhost:3000" data-target="mobileMenu" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down nav-items">
                    {/*<ul className="right nav-items">*/}

                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="Home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="Projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="Education"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Education
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="ContactMe"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="#"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Resume
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <ul className="sidenav" id="mobileMenu">
                <li className="nav-item sidenav-close">
                    <Link
                        activeClass="active"
                        to="Home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>

                <li className="nav-item sidenav-close">
                    <Link
                        activeClass="active"
                        to="Projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Projects
                    </Link>
                </li>
                <li className="nav-item sidenav-close">
                    <Link
                        activeClass="active"
                        to="Education"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Education
                    </Link>
                </li>

                <li className="nav-item sidenav-close">
                    <Link
                        activeClass="active"
                        to="ContactMe"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
                <li className="nav-item sidenav-close">
                    <Link
                        activeClass="active"
                        to="#"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Resume
                    </Link>
                </li>
            </ul>
        </div>

    );
}
