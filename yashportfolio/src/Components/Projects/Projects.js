import React from "react";
import ProjectsCard from "./ProjectsCard";

export default function Projects({id}) {
    let projects = [
        {
            id: 1,
            title: "Halma Game Playing Agent",
            description: "It was a game playing agent which I developed during my AI class at USC.",
            timeline: "August 2019 to October 2019"
        },
        {
            id: 2,
            title: "Halma Game Playing Agent",
            description: "It was a game playing agent which I developed during my AI class at USC with love. ",
            timeline: "August 2019 to October 2019"
        }
    ]

    return(
        <div id = {id} className="container">
            {projects && projects.map(project => (
                <ProjectsCard project={project} key={project.id}/>
            ))}
        </div>
    );
}