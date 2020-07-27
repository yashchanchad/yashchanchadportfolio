import React, {useEffect} from "react";
import { Link } from "react-scroll"
import Logo from "../../Static/img/logo_transparent.png"

export default function Navigationbar() {

    useEffect(() => {
        let sidenav = document.querySelectorAll('.sidenav');
        window.M.Sidenav.init(sidenav, {});
    }, [])

    return (
        <div>
            <div className="navbar-fixed">
                <nav className="nav-wrapper light-blue darken-4">
                    <a href="localhost:3000/" className="brand-logo pl-lg-5">
                        <img style={{maxWidth:50+"px", marginTop:-5+"px"}} src={Logo} alt="Yash's Logo"/>
                    </a>
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
                                offset={-20}
                                duration={500}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="Education"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                Education
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="Experience"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                            >
                                Work Experience
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="Projects"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="ContactMe"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Contact
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
                        offset={-60}
                        duration={500}
                    >
                        About
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
                        to="Experience"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Work Experience
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
                        to="ContactMe"
                        spy={true}
                        smooth={true}
                        // offset={-60}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}
