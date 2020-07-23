import React from "react";

export default function ProjectsCard({project}) {
    return(
        <div className="container text-center">
            <div className="row">
                <div className="col-auto"/>
                <div className="card z-depth-0 col-sm-12 col-lg-9 mx-auto">
                    <h4>{ project.title }</h4>
                    <p><i> &nbsp; { project.timeline }</i></p>
                    <ul className="text-left">{ project.description && project.description.map((item, i) => (
                        <li key={i}> {item} </li>
                    ))}</ul>
                </div>
                <div className="col-auto"/>
            </div>
        </div>
    );
}