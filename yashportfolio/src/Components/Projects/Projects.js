import React from "react";
import ProjectsCard from "./ProjectsCard";

export default function Projects({id}) {
    let projects = [
        {
            id: 5,
            title: "eCommerce Platform",
            description: [
                "Used Flask with Node.js in the backend to fetch search results from eBay APIs, which worked as a proxy server.",
                "Designed frontend in Angular and used Bootstrap 4 to make website responsive, further deployed it on GCP.",
                "Developed an Android application for the users to search for products available on eBay along with their details."
            ],
            timeline: "May 2020 to June 2020"
        },
        {
            id: 4,
            title: "Recommendation System",
            description: [
                "Combined model-based and item-based collaborative filtering method for predicting ratings of Business IDs and User IDs based on Yelp Dataset.",
                "Used the Default voting technique for training the item-based model to eliminate the problem of missing data."
            ],
            timeline: "February 2020 to March 2020"
        },
        {
            id: 3,
            title: "Halma Game Playing Agent",
            description: [
                "Developed a game-playing agent in Python that can play to win against another agent or human player.",
                "Implemented Minimax Algorithm with Alpha-Beta Pruning for gameplay, which increased efficiency by 80%."
            ],
            timeline: "August 2019 to October 2019"
        },
        {
            id: 2,
            title: "Home Automation using Alexa",
            description: [
                "Created Python Script, to turn on/off lights using a trigger “Turn on/off the light”; also linked necessary accounts together for interoperability.",
                "Executed by connecting various devices and modifying Python Script; Alexa also works as virtual personal assistant."
            ],
            timeline: "September 2018 to November 2018"
        },
        {
            id: 1,
            title: "BYS Security System",
            description: [
                "Integrated motion detection and image capture modules in Python and added live streaming feature on Raspberry Pi.",
                "Programmed customizable mailing feature of Gmail in Python and tailored it with existing modules to send real-time updates to owner; brainstormed each month in team to get new ideas."
            ],
            timeline: "August 2017 to November 2017"
        }
    ]

    return(
        <div className="mt-sm-5 pt-sm-5">
            <div id={id} className="d-flex  min-vh-100">
                <div className="container-fluid text-center my-auto">
                    <h2>Projects</h2>
                    <div className="row">
                        {projects && projects.map((project) => (
                            <div className="col-12" key={project.id}>
                                <ProjectsCard project={project}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/*<div className="divider grey"/>*/}
        </div>
    );
}