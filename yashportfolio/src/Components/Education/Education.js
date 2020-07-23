import React from "react";
import EducationCard from "./EducationCard";

export default function Education({id}) {
    let educations = [
        {
            id: "1",
            university: "University fo Southern California",
            departmentName: "Viterbi School of Engineering",
            timeline: "Fall 2019 to May 2021",
            Courses: [
                {code: 'INF553', name: "Foundations and Applications of Data Mining"},
                {code: 'CSCI570', name: "Analysis of Algorithms"},
                {code: 'CSCI561', name: "Foundations of Artificial Intelligence"},
                {code: 'CSCI585', name: "Database Systems"},
                {code: 'CSCI571', name: "Web Technologies"}
            ],
            GPA: "3.68"
        },
        {
            id: "2",
            university: "Charotar University of Science and Technology",
            departmentName: "Chandubhai S. Patel Institute of Technology",
            timeline: "Fall 2015 to May 2019",
            Courses: [
                {code: 'CE103', name: "Basics of Computation"}
            ],
            GPA: "9.0"
        }
    ]

    return(
        <div className="mb-sm-5 mb-lg-0 mt-sm-5 mt-md-5 mt-lg-n5">
            <div id={id} className="d-flex  min-vh-100 mt-lg-n5">
                <div className="container-fluid text-center my-auto">
                    <h2>Education</h2>
                    <div className="row text-left">
                        { educations && educations.map(education => (
                            <div className="col-12" key={education.id}>
                                <EducationCard education={education}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/*<div className="divider grey"/>*/}
        </div>
    );
}