import React from "react";
import ExperienceCard from "./ExperienceCard";

export default function Projects({id}) {
    let experiences = [

        {
            id: 3,
            title: "CoSAFE",
            location: "USA",
            description: [
                "Leaded team and devised a scalable web application in React with Redux Data Store.",
                "Fetched data from Firestore and integrated it with Maps API to display the details like Safety Score of restaurants."
            ],
            timeline: "June 2020 to August 2020"
        },
        {
            id: 2,
            title: "Aspirebit Technolab",
            location: "India",
            description: [
                "Developed a scalable web application and database for Video Status Application in PHP and MySQL, respectively.",
                "Created API in PHP for Mobile Applications to retrieve and update data: acted as team leader of the project."
            ],
            timeline: "December 2018 to June 2019"
        },
        {
            id: 1,
            title: "Aspirebit Technolab",
            location: "India",
            description: [
                "Managed databases in MySQL and analyzed customers’ feedbacks to provide insights to marketing team.",
                "Redesigned web application by extracting insightful data from customers’ feedback, results in increment of new users."
            ],
            timeline: "May 2018 to August 2018"
        }
    ]

    return(
        <div className="mb-sm-5 mb-lg-0 pt-sm-5 pt-md-5 pt-lg-n5">
            <div id={id} className="d-flex min-vh-100 ">
                <div className="container-fluid text-center my-auto">
                    <h2>Experience</h2>
                    <div className="row">
                        {experiences && experiences.map((experience) => (
                            <div className="col-12"  key={experience.id}>
                                <ExperienceCard experience={experience}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/*<div className="divider grey"/>*/}
        </div>
    );
}