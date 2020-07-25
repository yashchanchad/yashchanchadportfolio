import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedinIn,
    faFacebook,
    faInstagram,
    faGithub
} from "@fortawesome/free-brands-svg-icons";
// import faGmail from "../../img/gmail.svg"

export default function SocialBar() {
    return(
        <div>
            {/*<a*/}
            {/*    href = "mailto:yashchanchad.com"*/}
            {/*    className = "google social px-2"*/}
            {/*    target="_blank"*/}
            {/*>*/}
            {/*    <FontAwesomeIcon icon={faGmail} size="3x" />*/}
            {/*</a>*/}
            <a
                href = "https://www.linkedin.com/in/yashchanchad"
                className = "linkedin social px-2 pb-sm-5"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
            </a>
            <a
                href = "https://www.github.com/yashchanchad"
                className = "github social px-2 pb-sm-5"
                target = "_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
            <a
                href = "https://www.facebook.com/yashchanchad/"
                className = "facebook social px-2 pb-sm-5"
                target = "_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a
                href="https://www.instagram.com/yashchanchad"
                className="instagram social px-2"
                target = "_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
        </div>
    )
}