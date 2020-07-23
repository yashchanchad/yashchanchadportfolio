import React from "react";

export default function ExperienceCard({experience}) {
    return(
        <div className="container">
            <div className="card z-depth-0">
                <h4>{ experience.title }, { experience.location } </h4>
                {/*<h4>{ experience.title } </h4>*/}
                {/*<h6>{ experience.location }</h6>*/}
                <p><i> &nbsp; { experience.timeline }</i></p>
                <ul>{ experience.description && experience.description.map((item, i) => (
                    <li key={i}> {item} </li>
                ))}</ul>
            </div>
        </div>
    );
}