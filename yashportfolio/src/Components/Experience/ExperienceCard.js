import React from "react";

export default function ExperienceCard({experience}) {
    return(
        <div className="container text-center">
            <div className="row">
                <div className="col-auto"/>
                <div className="card border-0 z-depth-0 col-sm-12 col-lg-9 mx-auto">
                    <h4>{ experience.title }, { experience.location } </h4>
                    <p><i> &nbsp; { experience.timeline } </i> | <b> { experience.position } </b></p>
                    {/*<p></p>*/}
                    <ul>{ experience.description && experience.description.map((item, i) => (
                        <li key={i}> {item} </li>
                    ))}</ul>
                </div>
                <div className="col-auto"/>
            </div>
        </div>
    );
}